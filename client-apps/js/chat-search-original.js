// Chat Search App - Modern UI & Improved Logic
// Uses Genesys Cloud Platform SDK

const clientId = '6c467620-9486-4218-bf90-020b9e2c596b';
const redirectUri = window.location.origin + '/client-apps/chat-search.html';
const platformClient = window.platformClient || require('platformClient');
const client = platformClient.ApiClient.instance;
const searchApi = new platformClient.SearchApi();
const groupsApi = new platformClient.GroupsApi();
const usersApi = new platformClient.UsersApi();
const chatApi = new platformClient.ChatApi();
const md = window.markdownit();
let userJid = '';
let searchResults = [];
let lastSearchTerm = '';
let currentPage = 1;
let totalResults = 0;
let totalPages = 0;
let isLoading = false;

// Date filter variables
let currentDateFilter = 'anytime';
let customStartDate = null;
let customEndDate = null;

// Upgrade to HTTPS if needed
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

// Authenticate
client
    .loginImplicitGrant(clientId, redirectUri, { state: '' })
    .then(() => {
        console.log('Authentication successful');
        bootstrap();
    })
    .catch((error) => {
        console.error('Authentication failed:', error);
        bootstrapError();
    });

function bootstrapError() {
    $('#loading').addClass('hidden');
    $('#auth-failure').removeClass('hidden').show();
}

function bootstrap() {
    console.log('Bootstrap function called');

    $('#search-input').on(
        'input',
        debounce((e) => {
            console.log('Search input triggered:', e.target.value);
            searchChats(e.target.value);
        }, 300)
    );

    // Date filter event listeners - bind using event delegation to handle dynamic content
    $(document).on('click', '.date-preset', handleDatePresetClick);
    $(document).on('change', '#start-date, #end-date', handleCustomDateChange);

    console.log('About to call getUsersMe');
    usersApi
        .getUsersMe()
        .then((data) => {
            console.log('User data received:', data);
            if (data.chat) userJid = data.chat.jabberId;
            console.log('User JID set to:', userJid);
            $('#loading').addClass('hidden');
            $('#main-app').removeClass('hidden');
            $('#auth-failure').addClass('hidden').hide();
            console.log('UI updated - loading hidden, main-app shown');
        })
        .catch((error) => {
            console.error('Failed to get user info:', error);
            $('#loading').addClass('hidden');
            $('#auth-failure').removeClass('hidden').show();
        });
}

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function searchChats(term, page = 1) {
    console.log('searchChats called with term:', term, 'page:', page);
    lastSearchTerm = term;
    currentPage = page;

    if (!term || term.length < 4) {
        console.log('Term too short or empty, hiding results');
        $('#search-results').addClass('hidden');
        $('#search-meta').addClass('hidden');
        $('#pagination-top').addClass('hidden');
        $('#pagination').addClass('hidden');
        searchResults = [];
        totalResults = 0;
        totalPages = 0;
        return;
    }

    if (isLoading) {
        console.log('Already loading, skipping search');
        return;
    }
    isLoading = true;

    // Build simple search meta display
    let searchMeta = `Searching for: '${term}'`;
    if (currentDateFilter !== 'anytime') {
        const dateRange = getDateRange();
        if (dateRange.startValue && dateRange.endValue) {
            searchMeta += ` (${getDateFilterDisplayText()})`;
        }
    }
    if (page > 1) {
        searchMeta += ` (Page ${page})`;
    }
    searchMeta += '...';

    $('#search-meta').text(searchMeta).removeClass('hidden');

    // Build basic query
    let query = [{ fields: ['body'], value: term }];

    // Add date filter if not "anytime"
    if (currentDateFilter !== 'anytime') {
        const dateRange = getDateRange();
        if (dateRange.startValue && dateRange.endValue) {
            query.push({
                type: 'DATE_RANGE',
                fields: ['created'],
                startValue: dateRange.startValue,
                endValue: dateRange.endValue,
            });
        }
    }

    let body = {
        pageSize: 50,
        pageNumber: page,
        sortBy: 'created',
        sortOrder: 'DESC',
        expand: ['from', 'to'],
        types: ['messages'],
        query: query,
    };

    searchApi
        .postSearch(body, { profile: false })
        .then(getSearchResults)
        .catch(() => {
            $('#search-results')
                .html("<div style='color:#e74c3c'>Search failed. Please try again.</div>")
                .removeClass('hidden');
            $('#search-meta').addClass('hidden');
            $('#pagination-top').addClass('hidden');
            $('#pagination').addClass('hidden');
            isLoading = false;
        });
}

function getSearchResults(data) {
    isLoading = false;

    // Extract pagination info from API response
    totalResults = data.total || 0;
    totalPages = data.pageCount || 0;

    // Reset results for new page
    searchResults = [];

    if (data.hasOwnProperty('results') && data.results.length > 0) {
        // First, collect all results and identify groups
        let pendingGroupLookups = [];

        data.results.forEach((chat) => {
            let name = chat.from.name || 'Person';
            let image =
                chat.from.images && chat.from.images[0] && chat.from.images[0].imageUri
                    ? chat.from.images[0].imageUri
                    : 'https://ui-avatars.com/api/?name=' + encodeURIComponent(name);
            let from = chat.from.chat ? chat.from.chat.jabberId : chat.from.jid;
            let to = chat.to.chat ? chat.to.chat.jabberId : chat.to.jid;
            let chatType = to.endsWith('@conference') ? 'Group' : 'Direct';
            let groupName = 'Group'; // Default group name
            let originalGroupJid = to; // Keep original for group search

            if (to.endsWith('@conference')) {
                to = to.replace(/@conference$/, '@conference.genesys.orgspan.com');
                // Add to pending group lookups using original JID
                pendingGroupLookups.push({
                    jabberId: originalGroupJid, // Use original @conference format for search
                    fullJabberId: to, // Full format for chat API
                    index: searchResults.length,
                    isAdhoc: originalGroupJid.startsWith('adhoc-'), // Check if it's a personal group
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
                groupName: groupName,
                isPersonalGroup: originalGroupJid.startsWith('adhoc-') && chatType === 'Group',
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
        // Separate public groups from personal (adhoc) groups
        const publicGroups = groupLookups.filter((lookup) => !lookup.isAdhoc);
        const personalGroups = groupLookups.filter((lookup) => lookup.isAdhoc);

        // Handle public groups using Groups API
        if (publicGroups.length > 0) {
            const uniqueJabberIds = [...new Set(publicGroups.map((lookup) => lookup.jabberId))];
            const jabberIdParts = uniqueJabberIds.map((jabberId) => jabberId.split('@')[0]);

            // Create a map of jabber ID to group name for quick lookup
            const groupNameMap = {};

            // Use the SDK to get groups with all jabber IDs in one call
            const opts = {
                jabberId: jabberIdParts, // Pass all jabber IDs as array
                pageSize: 100,
            };

            const groupsData = await groupsApi.getGroups(opts);

            if (groupsData.entities && groupsData.entities.length > 0) {
                groupsData.entities.forEach((group) => {
                    if (group.chat && group.chat.jabberId && group.name) {
                        // Map using the full jabber ID format from the response
                        const fullJabberId = group.chat.jabberId;
                        groupNameMap[fullJabberId] = group.name;

                        // Also map the original @conference format for matching
                        const originalFormat = fullJabberId.replace(
                            /@conference\.genesys\.orgspan\.com$/,
                            '@conference'
                        );
                        groupNameMap[originalFormat] = group.name;
                    }
                });
            }

            // Update public group names
            publicGroups.forEach((lookup) => {
                const groupName = groupNameMap[lookup.jabberId];
                if (groupName) {
                    searchResults[lookup.index].groupName = groupName;
                }
            });
        }

        // Handle personal groups using Chat API
        if (personalGroups.length > 0) {
            const personalGroupPromises = personalGroups.map(async (lookup) => {
                try {
                    const roomData = await chatApi.getChatsRoom(lookup.fullJabberId);
                    if (roomData && roomData.subject) {
                        searchResults[lookup.index].groupName = roomData.subject;
                    }
                } catch (error) {
                    console.warn(`Failed to fetch personal group details for ${lookup.fullJabberId}:`, error);
                    // Keep default "Group" name for failed lookups
                }
            });

            // Wait for all personal group lookups to complete
            await Promise.all(personalGroupPromises);
        }
    } catch (error) {
        console.warn('Failed to fetch group details:', error);
        // Keep default "Group" names for all groups
    }
}

function renderSearchResults() {
    let resultsHtml = '';
    let paginationHtml = '';
    let metaHtml = '';

    if (searchResults.length > 0) {
        // Show total results and current page info
        const startResult = (currentPage - 1) * 50 + 1;
        const endResult = Math.min(startResult + searchResults.length - 1, totalResults);
        metaHtml = `Found ${totalResults} result${totalResults > 1 ? 's' : ''} for "${lastSearchTerm}"`;

        // Add date filter information
        if (currentDateFilter !== 'anytime') {
            metaHtml += ` (${getDateFilterDisplayText()})`;
        }

        metaHtml += ` (Showing ${startResult}-${endResult})`;

        resultsHtml = '<div class="results-container">';
        searchResults.forEach((chatResult) => {
            let targetId = chatResult.targetJid == userJid ? chatResult.fromJid : chatResult.targetJid;
            let chatUrl =
                chatResult.chatType === 'Group'
                    ? `https://apps.mypurecloud.com/directory/#/chat-room/${targetId}`
                    : `https://apps.mypurecloud.com/directory/#/chat-room/${targetId}`;

            // Use group name if available, otherwise use chat type
            let displayName = chatResult.chatType === 'Group' ? chatResult.groupName : chatResult.chatType;
            let badgeClass, badgeIcon;

            if (chatResult.chatType === 'Group') {
                if (chatResult.isPersonalGroup) {
                    badgeClass = 'chat-type-personal-group';
                    badgeIcon = 'fa-lock';
                    displayName = `${displayName}`; // Add lock emoji for visual distinction
                } else {
                    badgeClass = 'chat-type-group';
                    badgeIcon = 'fa-users';
                }
            } else {
                badgeClass = 'chat-type-direct';
                badgeIcon = 'fa-user';
            }

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

        // Generate pagination if we have multiple pages
        if (totalPages > 1) {
            paginationHtml = generatePagination();
        }
    } else if (lastSearchTerm && lastSearchTerm.length >= 4) {
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
        metaHtml = `No results found for "${lastSearchTerm}"`;
    }

    $('#search-results').html(resultsHtml).removeClass('hidden');

    if (metaHtml) {
        $('#search-meta').html(metaHtml).removeClass('hidden');
    } else {
        $('#search-meta').addClass('hidden');
    }

    if (paginationHtml) {
        $('#pagination-top').html(paginationHtml).removeClass('hidden');
        $('#pagination').html(paginationHtml).removeClass('hidden');
    } else {
        $('#pagination-top').addClass('hidden');
        $('#pagination').addClass('hidden');
    }
}

function generatePagination() {
    let paginationHtml = '<div class="pagination-container">';

    // Previous button
    if (currentPage > 1) {
        paginationHtml += `<button class="pagination-btn" onclick="navigateToPage(${currentPage - 1})" ${
            isLoading ? 'disabled' : ''
        }>
            <i class="fa fa-chevron-left"></i> Previous
        </button>`;
    }

    // Page numbers
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
        paginationHtml += `<button class="pagination-btn page-number" onclick="navigateToPage(1)" ${
            isLoading ? 'disabled' : ''
        }>1</button>`;
        if (startPage > 2) {
            paginationHtml += '<span class="pagination-ellipsis">...</span>';
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        paginationHtml += `<button class="pagination-btn page-number ${activeClass}" onclick="navigateToPage(${i})" ${
            isLoading ? 'disabled' : ''
        }>${i}</button>`;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHtml += '<span class="pagination-ellipsis">...</span>';
        }
        paginationHtml += `<button class="pagination-btn page-number" onclick="navigateToPage(${totalPages})" ${
            isLoading ? 'disabled' : ''
        }>${totalPages}</button>`;
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHtml += `<button class="pagination-btn" onclick="navigateToPage(${currentPage + 1})" ${
            isLoading ? 'disabled' : ''
        }>
            Next <i class="fa fa-chevron-right"></i>
        </button>`;
    }

    paginationHtml += '</div>';
    return paginationHtml;
}

function navigateToPage(page) {
    if (isLoading || page === currentPage) return;

    // Show loading indicator
    showPaginationLoading(page);

    // Perform search
    searchChats(lastSearchTerm, page);
}

function showPaginationLoading(page) {
    const loadingHtml = `
        <div class="pagination-container">
            <div class="pagination-loading">
                <i class="fa fa-spinner fa-spin"></i>
                Loading page ${page}...
            </div>
        </div>
    `;
    $('#pagination-top').html(loadingHtml);
    $('#pagination').html(loadingHtml);
}

// Date Filter Functions
function handleDatePresetClick(event) {
    const preset = $(event.target).data('preset');

    // Update UI
    $('.date-preset').removeClass('active');
    $(event.target).addClass('active');

    // Show/hide custom date inputs
    if (preset === 'custom') {
        $('#custom-date-inputs').removeClass('hidden');
    } else {
        $('#custom-date-inputs').addClass('hidden');
        currentDateFilter = preset;
        updateDateFilterSummary();

        // Trigger search if there's a search term
        if (lastSearchTerm && lastSearchTerm.length >= 4) {
            searchChats(lastSearchTerm, 1);
        }
    }
}

function handleCustomDateChange() {
    const startDate = $('#start-date').val();
    const endDate = $('#end-date').val();

    if (startDate && endDate) {
        customStartDate = startDate;
        customEndDate = endDate;
        currentDateFilter = 'custom';
        updateDateFilterSummary();

        // Trigger search if there's a search term
        if (lastSearchTerm && lastSearchTerm.length >= 4) {
            searchChats(lastSearchTerm, 1);
        }
    }
}

function getDateRange() {
    const now = new Date();
    let startDate, endDate;

    switch (currentDateFilter) {
        case 'today':
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            break;

        case 'yesterday':
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
            endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            break;

        case 'thisWeek':
            const dayOfWeek = now.getDay();
            const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dayOfWeek);
            startDate = startOfWeek;
            endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            break;

        case 'lastWeek':
            const lastWeekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 7);
            const lastWeekEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
            startDate = lastWeekStart;
            endDate = lastWeekEnd;
            break;

        case 'thisMonth':
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            break;

        case 'custom':
            if (customStartDate && customEndDate) {
                startDate = new Date(customStartDate);
                endDate = new Date(customEndDate);
                endDate.setHours(23, 59, 59, 999); // End of day
            }
            break;

        default:
            return { startValue: null, endValue: null };
    }

    if (startDate && endDate) {
        return {
            startValue: startDate.getTime().toString(),
            endValue: endDate.getTime().toString(),
        };
    }

    return { startValue: null, endValue: null };
}

function updateDateFilterSummary() {
    let summaryText = '';

    switch (currentDateFilter) {
        case 'anytime':
            summaryText = 'Showing conversations from all time';
            break;
        case 'today':
            summaryText = 'Showing conversations from today';
            break;
        case 'yesterday':
            summaryText = 'Showing conversations from yesterday';
            break;
        case 'thisWeek':
            summaryText = 'Showing conversations from this week';
            break;
        case 'lastWeek':
            summaryText = 'Showing conversations from last week';
            break;
        case 'thisMonth':
            summaryText = 'Showing conversations from this month';
            break;
        case 'custom':
            if (customStartDate && customEndDate) {
                const start = new Date(customStartDate).toLocaleDateString();
                const end = new Date(customEndDate).toLocaleDateString();
                summaryText = `Showing conversations from ${start} to ${end}`;
            } else {
                summaryText = 'Select start and end dates';
            }
            break;
    }

    $('#date-filter-summary').text(summaryText);
}

function getDateFilterDisplayText() {
    switch (currentDateFilter) {
        case 'today':
            return 'Today';
        case 'yesterday':
            return 'Yesterday';
        case 'thisWeek':
            return 'This Week';
        case 'lastWeek':
            return 'Last Week';
        case 'thisMonth':
            return 'This Month';
        case 'custom':
            if (customStartDate && customEndDate) {
                const start = new Date(customStartDate).toLocaleDateString();
                const end = new Date(customEndDate).toLocaleDateString();
                return `${start} - ${end}`;
            }
            return 'Custom Range';
        default:
            return '';
    }
}
