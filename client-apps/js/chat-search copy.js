// Chat Search App - Modern UI & Improved Logic
// Uses Genesys Cloud Platform SDK

const clientId = "6c467620-9486-4218-bf90-020b9e2c596b";
const redirectUri = window.location.origin + "/client-apps/chat-search.html";
const platformClient = window.platformClient || require("platformClient");
const client = platformClient.ApiClient.instance;
const searchApi = new platformClient.SearchApi();
const groupsApi = new platformClient.GroupsApi();
const usersApi = new platformClient.UsersApi();
const md = window.markdownit();
let userJid = "";
let searchResults = [];
let lastSearchTerm = "";

// Upgrade to HTTPS if needed
if (location.protocol !== "https:") {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

// Authenticate
client
  .loginImplicitGrant(clientId, redirectUri, { state: "" })
  .then(() => bootstrap())
  .catch(() => bootstrapError());

function bootstrapError() {
  $("#loading").addClass("hidden");
  $("#auth-failure").removeClass("hidden").show();
}

function bootstrap() {
  $("#search-input").on("input", debounce((e) => {
    searchChats(e.target.value);
  }, 300));

  usersApi.getUsersMe().then((data) => {
    if (data.chat) userJid = data.chat.jabberId;
    $("#loading").addClass("hidden");
    $("#main-app").removeClass("hidden");
    $("#auth-failure").addClass("hidden").hide();
  }).catch(() => {
    $("#loading").addClass("hidden");
    $("#auth-failure").removeClass("hidden").show();
  });
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function searchChats(term) {
  lastSearchTerm = term;
  if (!term || term.length < 4) {
    $("#search-results").addClass("hidden");
    $("#search-meta").addClass("hidden");
    return;
  }
  $("#search-meta").text("Searching for: '" + term + "' ...").removeClass("hidden");

  let body = {
    sortOrder: "SCORE",
    pageSize: 50,
    expand: ["from", "to"],
    types: ["messages"],
    query: [{ value: term, fields: ["body"], type: "TERM" }],
  };
  searchApi.postSearch(body, { profile: false })
    .then(getSearchResults)
    .catch(() => {
      $("#search-results").html("<div style='color:#e74c3c'>Search failed. Please try again.</div>").removeClass("hidden");
      $("#search-meta").addClass("hidden");
    });
}

function getSearchResults(data) {
  searchResults = [];
  if (data.hasOwnProperty("results")) {
    // First, collect all results and identify groups
    let pendingGroupLookups = [];
    
    data.results.forEach((chat) => {
      let name = chat.from.name || "Person";
      let image = (chat.from.images && chat.from.images[0] && chat.from.images[0].imageUri) ? chat.from.images[0].imageUri : "https://ui-avatars.com/api/?name=" + encodeURIComponent(name);
      let from = chat.from.chat ? chat.from.chat.jabberId : chat.from.jid;
      let to = chat.to.chat ? chat.to.chat.jabberId : chat.to.jid;
      let chatType = to.endsWith("@conference") ? "Group" : "Direct";
      let groupName = "Group"; // Default group name
      let originalGroupJid = to; // Keep original for group search
      
      if (to.endsWith("@conference")) {
        to = to.replace(/@conference$/, "@conference.genesys.orgspan.com");
        // Add to pending group lookups using original JID
        pendingGroupLookups.push({
          jabberId: originalGroupJid, // Use original @conference format for search
          index: searchResults.length
        });
      }
      
      let chatResult = {
        fromJid: from,
        targetJid: to,
        body: chat.body,
        created: chat.created,
        userName: name,
        image: image,
        chatType: chatType,
        groupName: groupName
      };
      searchResults.push(chatResult);
    });
    
    // If we have groups to look up, fetch their details
    if (pendingGroupLookups.length > 0) {
      fetchGroupDetails(pendingGroupLookups).then(() => {
        // Sort by latest at the top after group details are fetched
        searchResults.sort((a, b) => new Date(b.created) - new Date(a.created));
        renderSearchResults();
      });
    } else {
      // Sort by latest at the top
      searchResults.sort((a, b) => new Date(b.created) - new Date(a.created));
      renderSearchResults();
    }
  } else {
    renderSearchResults();
  }
}

async function fetchGroupDetails(groupLookups) {
  try {
    // Extract unique group jabber IDs and convert to jabber ID parts (before @)
    const uniqueJabberIds = [...new Set(groupLookups.map(lookup => lookup.jabberId))];
    const jabberIdParts = uniqueJabberIds.map(jabberId => jabberId.split('@')[0]);
    
    // Create a map of jabber ID to group name for quick lookup
    const groupNameMap = {};
    
    // Use the SDK to get groups with all jabber IDs in one call
    const opts = {
      jabberId: jabberIdParts, // Pass all jabber IDs as array
      pageSize: 100
    };
    
    const groupsData = await groupsApi.getGroups(opts);
    
    if (groupsData.entities && groupsData.entities.length > 0) {
      groupsData.entities.forEach(group => {
        if (group.chat && group.chat.jabberId && group.name) {
          // Map using the full jabber ID format from the response
          const fullJabberId = group.chat.jabberId;
          groupNameMap[fullJabberId] = group.name;
          
          // Also map the original @conference format for matching
          const originalFormat = fullJabberId.replace(/@conference\.genesys\.orgspan\.com$/, "@conference");
          groupNameMap[originalFormat] = group.name;
        }
      });
    }
    
    // Update search results with group names
    groupLookups.forEach(lookup => {
      const groupName = groupNameMap[lookup.jabberId];
      if (groupName) {
        searchResults[lookup.index].groupName = groupName;
      }
    });
  } catch (error) {
    console.warn("Failed to fetch group details:", error);
    // Keep default "Group" names for all groups
  }
}

function renderSearchResults() {
  let resultsHtml = "";
  let metaHtml = "";
  if (searchResults.length > 0) {
    metaHtml = `Found ${searchResults.length} result${searchResults.length > 1 ? 's' : ''} for "${lastSearchTerm}"`;
    
    resultsHtml = '<div class="results-container">';
    searchResults.forEach((chatResult) => {
      let targetId = (chatResult.targetJid == userJid) ? chatResult.fromJid : chatResult.targetJid;
      let chatUrl = chatResult.chatType === "Group" ?
        `https://apps.mypurecloud.com/directory/#/chat-room/${targetId}` :
        `https://apps.mypurecloud.com/directory/#/chat-room/${targetId}`;
      
      // Use group name if available, otherwise use chat type
      let displayName = chatResult.chatType === "Group" ? chatResult.groupName : chatResult.chatType;
      let badgeClass = chatResult.chatType === "Group" ? "chat-type-group" : "chat-type-direct";
      let badgeIcon = chatResult.chatType === "Group" ? "fa-users" : "fa-user";
      
      resultsHtml += `
        <div class="search-result">
          <div class="search-result-header">
            <img src="${chatResult.image}" alt="Avatar" class="avatar">
            <div class="user-info">
              <div class="user-name">${chatResult.userName}</div>
              <div class="message-date">${new Date(chatResult.created).toLocaleString()}</div>
            </div>
            <div class="chat-labels">
              <span class="chat-type-badge ${badgeClass}">
                <i class="fa ${badgeIcon}"></i>
                ${displayName}
              </span>
              <a href="${chatUrl}" target="_blank" class="open-chat-btn" title="Open chat">
                <i class="fa fa-external-link"></i>
                Open
              </a>
            </div>
          </div>
          <div class="message-content">${md.render(chatResult.body)}</div>
        </div>`;
    });
    resultsHtml += '</div>';
  } else {
    resultsHtml = `
      <div class="no-results">
        <div class="no-results-icon">
          <i class="fa fa-search"></i>
        </div>
        <div>No results found. Try searching with different keywords.</div>
        <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #94a3b8;">
          Your search must be at least 4 characters long.
        </div>
      </div>`;
    metaHtml = "";
  }
  
  $("#search-results").html(resultsHtml).removeClass("hidden");
  if (metaHtml) {
    $("#search-meta").html(metaHtml).removeClass("hidden");
  } else {
    $("#search-meta").addClass("hidden");
  }
}
