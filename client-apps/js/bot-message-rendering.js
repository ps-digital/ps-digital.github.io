// Obtain a reference to the platformClient object
const platformClient = require('platformClient');
const client = platformClient.ApiClient.instance;
client.setEnvironment(platformClient.PureCloudRegionHosts.eu_central_1);
client.setPersistSettings(true, 'sample_app');

// API instances
const conversationsApi = new platformClient.ConversationsApi();

let currentConversationId = '';

/** --------------------------------------------------------------
 *                       INITIAL SETUP
 * -------------------------------------------------------------- */
const urlParams = new URLSearchParams(window.location.search);
currentConversationId = urlParams.get('conversationid');

client
    .loginImplicitGrant('9049644e-ef61-4c1a-8260-7d3d28548a3f', 'https://ps-digital.github.io/client-apps/bot-messages.html', { state: currentConversationId })
    .then((data) => {
        console.log(data);

        // Assign conversation id
        currentConversationId = data.state;

        // Get current conversation
        return conversationsApi
            .getConversation(currentConversationId)
            .then((conversationDetail) => {
                console.log('getConversation success!', conversationDetail);

                let transcript = [];
                let messages = '';
                try {
                    //console.log('sLimitlessTranscript', conversationDetail.participants[0].attributes["sLimitlessTranscript"]);
                    //let transcript = conversationDetail.participants[0].attributes["sLimitlessTranscript"].replace(/[\n]/g, '\\n')
                    transcript = conversationDetail.participants.filter((participant) => participant.purpose === 'customer')[0].attributes['sLimitlessTranscript'].replace(/[\n]/g, '\\n');
                    console.log('sLimitlessTranscript', transcript);
                    messages = JSON.parse(transcript);
                } catch {
                    console.log('no sLimitlessTranscript attribute found');
                }

                let customer = conversationDetail.participants.filter((participant) => participant.purpose === 'customer')[0];
                console.log('customer', customer.calls, customer.chats, customer.callbacks, customer.emails, customer.messages);

                //if((customer.calls === undefined) && (customer.chats !== undefined) && (customer.callbacks === undefined) && (customer.emails === undefined) && (customer.messages === undefined)) {
                if (customer.chats !== undefined && customer.chats.length != 0) {
                    console.log('chasing a chat');
                    return conversationsApi
                        .getConversationsChatMessages(currentConversationId)
                        .then((conversationChatMessages) => {
                            console.log('getConversationsChatMessages success!', conversationChatMessages);

                            conversationChatMessages.entities.forEach((msg) => {
                                if (msg.hasOwnProperty('body')) {
                                    let chatMessage;
                                    console.log('msg.body:', msg.body);

                                    /* try { 
    
                            let json = JSON.parse(msg.body);
                            chatMessage = json.text;
                        }
                        catch (err) {
                            chatMessage = msg.body;
                        } */

                                    if (msg.body.startsWith('{')) {
                                        chatMessage = JSON.parse(msg.body).text;
                                    } else {
                                        chatMessage = msg.body;
                                    }

                                    let timestamp = new Date(msg.timestamp);

                                    // Determine the name by cross referencing sender id
                                    // with the participant.chats.id from the conversation detail
                                    let senderId = msg.sender.id;
                                    let purpose = conversationDetail.participants.find((p) => p.chats[0].id == senderId).purpose;
                                    let hours, minutes;

                                    if (timestamp.getHours() < 10) {
                                        hours = '0' + timestamp.getHours();
                                    } else {
                                        hours = '' + timestamp.getHours();
                                    }
                                    if (timestamp.getMinutes() < 10) {
                                        minutes = '0' + timestamp.getMinutes();
                                    } else {
                                        minutes = '' + timestamp.getMinutes();
                                    }

                                    console.log(purpose, chatMessage, hours + ':' + minutes);

                                    let chatMsgDiv, messageContainer, bubblecustomer, bubbleambassador, bubblemessage, messageitself, buffer1, buffer2, timeContainer, timeItself;

                                    if (purpose === 'customer') {
                                        chatMsgDiv = document.createElement('div');
                                        chatMsgDiv.classList.add('dialog-container');

                                        messageContainer = document.createElement('div');

                                        bubblecustomer = document.createElement('div');
                                        bubblecustomer.classList.add('bubble-customer');

                                        bubblemessage = document.createElement('div');
                                        bubblemessage.classList.add('message-container-customer');

                                        messageitself = document.createElement('span');
                                        messageitself.classList.add('message');

                                        messagewords = document.createElement('div');
                                        messagewords.classList.add('message-text-a-customer', 'message-text-b', 'MuiTypography-body2', 'MuiTypography-root');

                                        if (messages != '') {
                                            // we have Limitless messages
                                            for (i in messages.messages) {
                                                if (messages.messages[i].message === chatMessage) {
                                                    messagewords.classList.remove('message-text-a-customer');
                                                    messagewords.classList.add('message-text-a-customer-limitless');
                                                    bubblemessage.classList.remove('message-container-customer');
                                                    bubblemessage.classList.add('message-container-customer-limitless');
                                                }
                                            }
                                        }
                                        messagewords.textContent = chatMessage;

                                        messageitself.appendChild(messagewords);

                                        bubblemessage.appendChild(messageitself);

                                        bubblecustomer.appendChild(bubblemessage);

                                        buffer1 = document.createElement('div');
                                        buffer1.classList.add('c-buffer1');
                                        bubblecustomer.appendChild(buffer1);

                                        buffer2 = document.createElement('div');
                                        buffer2.classList.add('c-buffer2');
                                        bubblecustomer.appendChild(buffer2);

                                        messageContainer.appendChild(bubblecustomer);

                                        timeContainer = document.createElement('div');
                                        timeContainer.classList.add('time-c');

                                        timeItself = document.createElement('span');
                                        timeItself.classList.add('time-text', 'MuiTypography-root', 'MuiTypography-caption', 'MuiTypography-colorTextSecondary');
                                        timeItself.textContent = hours + ':' + minutes;

                                        timeContainer.appendChild(timeItself);
                                        messageContainer.appendChild(timeContainer);

                                        chatMsgDiv.appendChild(messageContainer);
                                    } else {
                                        chatMsgDiv = document.createElement('div');
                                        chatMsgDiv.classList.add('dialog-container');

                                        messageContainer = document.createElement('div');
                                        messageContainer.classList.add('bubble-ambassador');

                                        buffer1 = document.createElement('div');
                                        buffer1.classList.add('a-buffer1');
                                        messageContainer.appendChild(buffer1);

                                        bubbleambassador = document.createElement('div');
                                        bubbleambassador.style.overflow = 'hidden';

                                        bubblemessage = document.createElement('div');
                                        bubblemessage.classList.add('message-container-workflow');

                                        messageitself = document.createElement('span');
                                        messageitself.classList.add('message');

                                        messagewords = document.createElement('div');
                                        messagewords.classList.add('message-text-a-workflow', 'message-text-b', 'MuiTypography-body2', 'MuiTypography-root');

                                        for (i in messages.messages) {
                                            if (chatMessage === messages.messages[i].message) {
                                                messagewords.classList.remove('message-text-a-workflow');
                                                messagewords.classList.add('message-text-a-ambassador');
                                                bubblemessage.classList.remove('message-container-workflow');
                                                bubblemessage.classList.add('message-container-ambassador');
                                            }
                                        }

                                        messagewords.textContent = chatMessage;

                                        messageitself.appendChild(messagewords);

                                        bubblemessage.appendChild(messageitself);

                                        bubbleambassador.appendChild(bubblemessage);

                                        timeContainer = document.createElement('div');
                                        timeContainer.classList.add('time-a');

                                        timeItself = document.createElement('span');
                                        timeItself.classList.add('time-text', 'MuiTypography-root', 'MuiTypography-caption', 'MuiTypography-colorTextSecondary');
                                        timeItself.textContent = hours + ':' + minutes;

                                        timeContainer.appendChild(timeItself);
                                        bubbleambassador.appendChild(timeContainer);

                                        buffer2 = document.createElement('div');
                                        buffer2.classList.add('a-buffer2');
                                        messageContainer.appendChild(buffer2);

                                        messageContainer.appendChild(bubbleambassador);

                                        chatMsgDiv.appendChild(messageContainer);
                                    }

                                    document.getElementsByClassName('container')[0].appendChild(chatMsgDiv);
                                    document.getElementsByClassName('container')[0].scrollTop = 99999999;
                                }
                            });
                        })
                        .catch((err) => {
                            console.log('getConversationsChatMessages error! ');
                            console.error(err);
                        });
                } else {
                    // output just the limitless transcript to the window
                    for (i in messages.messages) {
                        console.log(messages.messages[i].role, messages.messages[i].message, messages.messages[i].time);

                        // now paint these into the web page
                        let chatMsgDiv, messageContainer, bubblecustomer, bubbleambassador, bubblemessage, messageitself, buffer1, buffer2, timeContainer, timeItself;

                        if (messages.messages[i].role === 'CU') {
                            chatMsgDiv = document.createElement('div');
                            chatMsgDiv.classList.add('dialog-container');

                            messageContainer = document.createElement('div');

                            bubblecustomer = document.createElement('div');
                            bubblecustomer.classList.add('bubble-customer');

                            bubblemessage = document.createElement('div');
                            bubblemessage.classList.add('message-container-customer-limitless');

                            messageitself = document.createElement('span');
                            messageitself.classList.add('message');

                            messagewords = document.createElement('div');
                            messagewords.classList.add('message-text-a-ambassador', 'message-text-b', 'MuiTypography-body2', 'MuiTypography-root');
                            messagewords.textContent = messages.messages[i].message;

                            messageitself.appendChild(messagewords);

                            bubblemessage.appendChild(messageitself);

                            bubblecustomer.appendChild(bubblemessage);

                            buffer1 = document.createElement('div');
                            buffer1.classList.add('c-buffer1');
                            bubblecustomer.appendChild(buffer1);

                            buffer2 = document.createElement('div');
                            buffer2.classList.add('c-buffer2');
                            bubblecustomer.appendChild(buffer2);

                            messageContainer.appendChild(bubblecustomer);

                            timeContainer = document.createElement('div');
                            timeContainer.classList.add('time-c');

                            timeItself = document.createElement('span');
                            timeItself.classList.add('time-text', 'MuiTypography-root', 'MuiTypography-caption', 'MuiTypography-colorTextSecondary');
                            timeItself.textContent = messages.messages[i].time;

                            timeContainer.appendChild(timeItself);
                            messageContainer.appendChild(timeContainer);

                            chatMsgDiv.appendChild(messageContainer);
                        } else {
                            chatMsgDiv = document.createElement('div');
                            chatMsgDiv.classList.add('dialog-container');

                            messageContainer = document.createElement('div');
                            messageContainer.classList.add('bubble-ambassador');

                            buffer1 = document.createElement('div');
                            buffer1.classList.add('a-buffer1');
                            messageContainer.appendChild(buffer1);

                            bubbleambassador = document.createElement('div');
                            bubbleambassador.style.overflow = 'hidden';

                            bubblemessage = document.createElement('div');
                            bubblemessage.classList.add('message-container-ambassador');

                            messageitself = document.createElement('span');
                            messageitself.classList.add('message');

                            messagewords = document.createElement('div');
                            messagewords.classList.add('message-text-a-ambassador', 'message-text-b', 'MuiTypography-body2', 'MuiTypography-root');
                            messagewords.textContent = messages.messages[i].message;

                            messageitself.appendChild(messagewords);

                            bubblemessage.appendChild(messageitself);

                            bubbleambassador.appendChild(bubblemessage);

                            timeContainer = document.createElement('div');
                            timeContainer.classList.add('time-a');

                            timeItself = document.createElement('span');
                            timeItself.classList.add('time-text', 'MuiTypography-root', 'MuiTypography-caption', 'MuiTypography-colorTextSecondary');
                            timeItself.textContent = messages.messages[i].time;

                            timeContainer.appendChild(timeItself);
                            bubbleambassador.appendChild(timeContainer);

                            buffer2 = document.createElement('div');
                            buffer2.classList.add('a-buffer2');
                            messageContainer.appendChild(buffer2);

                            messageContainer.appendChild(bubbleambassador);

                            chatMsgDiv.appendChild(messageContainer);
                        }

                        document.getElementsByClassName('container')[0].appendChild(chatMsgDiv);
                        document.getElementsByClassName('container')[0].scrollTop = 99999999;
                    }
                }
            })
            .catch((err) => {
                console.log('getConversation error! ');
                console.error(err);
            });

        // Error Handling
    })
    .catch((e) => console.log(e));
