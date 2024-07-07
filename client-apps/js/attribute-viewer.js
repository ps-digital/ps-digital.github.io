const platformClient = require('platformClient');
const clientId = '9049644e-ef61-4c1a-8260-7d3d28548a3f';
const redirectUri = 'https://dev.localhost.com:5000/client-apps/attribute-viewer.html';
const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.eu_central_1);
const urlParams = new URLSearchParams(window.location.search);
var environment = urlParams.get('environment');
var state = environment + '|' + urlParams.get('conversationId');
var conversationsApi = new platformClient.ConversationsApi();

// upgrade to https
if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

// authenticate!
client.setEnvironment(environment);
client.setPersistSettings(true, 'attributer');
client
    .loginImplicitGrant(clientId, redirectUri, { state: state })
    .then((data) => {
        // Do authenticated things
        bootstrap(data.state);
    })
    .catch((err) => {
        // Handle failure response
        console.error(err);
        bootstrapError();
    });

// Section: Bootstrap

function bootstrapError() {
    $('#main-app').addClass('hidden');
    $('#auth-failure').removeClass('hidden');
}

function bootstrap(data) {
    var returnState = data.split('|');

    // put things back in the URL in case the user reloads
    if (!environment) {
        history.pushState({}, 'Attributer', '?environment=' + returnState[0] + '&conversationId=' + returnState[1]);
    }

    // get conversation data
    getConversation(returnState[1]);
}

// Section: Conversation data

function getConversation(conversationId) {
    conversationsApi
        .getConversation(conversationId)
        .then((data) => {
            parseConversationAttributes(data);
        })
        .catch((error) => {
            bootstrapError();
            console.error(error);
        });
}

function parseConversationAttributes(conversation) {
    var success = false;

    if (conversation) {
        if (conversation.participants.length > 0) {
            if (conversation.participants[0].attributes) {
                const attrObj = conversation.participants[0].attributes;

                const attrDict = Object.keys(attrObj).map((key) => ({
                    name: key,
                    value: attrObj[key],
                    type: 'string',
                }));

                success = true;
                renderAttributes(attrDict);
            }
        }
    }

    if (!success) {
        renderNoAttributes();
    }
}

// Section: Rendering

function renderAttributes(attributes) {
    let html = '';

    attributes.forEach((attribute) => {
        if (!attribute.value) {
            attribute.value = '(no value)';
        }

        html += `<div class="conversation-attribute padded"><span class="conversation-attribute-name">${attribute.name}</span>${attribute.value}</div>`;
    });

    if (html.length < 1) {
        renderNoAttributes();
    } else {
        $('#conversation-data').html(html);
    }
}

function renderNoAttributes() {
    $('#conversation-data').html(`<div class="centered padded">This conversation has no participant attributes.</div>`);
}

function reload() {
    window.location.reload(false);
}
