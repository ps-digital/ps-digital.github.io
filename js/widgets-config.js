let configData = localStorage.getItem('configData');
if (configData) {
    configData = JSON.parse(configData);

    let w1Switch = configData['w1_switch'];
    let w2Switch = configData['w2_switch'];
    let w2GpeSwitch = configData['w2_gpe_switch'];
    let w2CobrowseSwitch = configData['w2_cobrowse_switch'];
    let w3Switch = configData['w3_switch'];
    let w4Switch = configData['w4_switch'];

    let w1_orgId = configData['w1_orgId'];
    let w1_shortOrgId = configData['w1_shortOrgId'];
    let w1_baseUrl = configData['w1_baseUrl'];
    let w1_deploymentKey = configData['w1_deploymentKey'];
    let w1_coBrowseDeploymentKey = configData['w1_coBrowseDeploymentKey'];
    let w1_queueName = configData['w1_queueName'];
    let w1_orgName = configData['w1_orgName'];
    let w1_regionHost = configData['w1_regionHost'];

    let w2_orgId = configData['w2_orgId'];
    let w2_baseUrl = configData['w2_baseUrl'];
    let w2_deploymentKey = configData['w2_deploymentKey'];
    let w2_queueName = configData['w2_queueName'];
    let w2_coBrowseDeploymentKey = configData['w2_coBrowseDeploymentKey'];
    let w2_environment = configData['w2_environment'];

    let w3_environment = configData['w3_environment'];
    let w3_baseUrl = configData['w3_baseUrl'];
    let w3_deploymentKey = configData['w3_deploymentKey'];

    let w4_regionHost = configData['w4_regionHost'];
    let w4_clientId = configData['w4_clientId'];
    let w4_clientSecret = configData['w4_clientSecret'];
    let w4_scheduleGroupId = configData['w4_scheduleGroupId'];
    let w4_emergencyGroupId = configData['w4_emergencyGroupId'];
    let w4_queueId = configData['w4_queueId'];

    if (w1Switch == 'on') {
        var widgetScriptElement = document.createElement('script');
        widgetScriptElement.setAttribute('src', 'https://apps.' + w1_baseUrl + '/webchat/jsapi-v1.js');
        widgetScriptElement.setAttribute('region', w1_regionHost);
        widgetScriptElement.setAttribute('org-guid', w1_orgId);
        widgetScriptElement.setAttribute('deployment-key', w1_deploymentKey);

        widgetScriptElement.addEventListener('load', function initializeChat() {
            var chatConfig = {
                webchatAppUrl: 'https://apps.' + w1_baseUrl + '/webchat',
                webchatServiceUrl: 'https://realtime.' + w1_baseUrl + ':443',
                orgId: w1_shortOrgId,
                orgGuid: w1_orgId,
                orgName: w1_orgName,
                queueName: w1_queueName,
                logLevel: 'DEBUG',
                locale: 'en',
                companyLogo: {
                    width: 600,
                    height: 149,
                    url: 'images/logo.png',
                },
                companyLogoSmall: {
                    width: 25,
                    height: 25,
                    url: 'images/logo.png',
                },
                agentAvatar: {
                    width: 462,
                    height: 462,
                    url: 'https://d3a63qt71m2kua.cloudfront.net/developer-tools/1961/assets/images/agent.jpg',
                },
                welcomeMessage: 'Welcome to PS Global Chat',
                cssClass: 'webchat-frame',
                css: {
                    width: '100%',
                    height: '100%',
                },
                // Deployment key for your cobrowse deployment from PureCloud admin UI
                cobrowseConfig: {
                    deploymentKey: w1_coBrowseDeploymentKey,
                },
                // Whether to allow reconnects
                reconnectEnabled: true,

                //Allowed reconnect origins
                reconnectOrigins: [],
            };

            $('body').append(`
                <button id="chatBtn" class="chat-bttn btn-round-full btn-main-2" style="display: visible">Live Chat</button>
                <div class="genesys-chat" id="chat-container"</div>`);

            // Required if reconnects are enabled
            window.PURECLOUD_WEBCHAT_FRAME_CONFIG = {
                containerEl: 'chat-container',
            };

            ININ.webchat
                .create(chatConfig)
                .then(function (webchat) {
                    // Optionally use isAutoJoined if reconnects are enabled
                    if (webchat.isAutoJoined()) {
                        // Show the chat container
                        $('#chat-container').show();

                        // Hide the chat button
                        $('#chatBtn').hide();
                    } else {
                        $(document).on('click', '#chatBtn', function () {
                            // Use getConfig.setConfigProperty() for any web chat configuration property to dynamically set config values.
                            webchat.getConfig().setData({});

                            //Use the updateConfig function to update batches of properties by passing in a partially filled chatConfig object
                            webchat.updateConfig({});

                            // Show the chat container
                            $('#chat-container').show();

                            // Hide the chat button
                            $('#chatBtn').hide();
                            // Alternatively, call webchat.renderPopup here. Note that reconnects do not apply to popup chat.
                            return webchat.renderFrame({
                                containerEl: 'chat-container',
                            });

                            // return webchat.renderPopup({
                            //     width: 600,
                            //     height: 600,
                            //     title: 'Chat',
                            //     newTab: true,
                            // });
                        });
                    }
                })
                .catch(function (err) {
                    console.log(err);
                });
        });

        document.head.append(widgetScriptElement);
    }

    if (w2Switch == 'on') {
        if (w2CobrowseSwitch == 'on') {
            window._genesys = {
                widgets: {
                    main: {
                        theme: 'light',
                        preload: ['webchat', 'sidebar'],
                        lang: 'en',
                    },
                    webchat: {
                        transport: {
                            type: 'purecloud-v2-sockets',
                            dataURL: 'https://api.' + w2_baseUrl,
                            deploymentKey: w2_deploymentKey,
                            orgGuid: w2_orgId,
                            interactionData: {
                                routing: {
                                    targetType: 'QUEUE',
                                    targetAddress: w2_queueName,
                                    priority: 2,
                                },
                            },
                        },
                        form: {
                            wrapper: '<table></table>',
                            inputs: [
                                {
                                    id: 'cx_webchat_form_firstname',
                                    name: 'firstname',
                                    maxlength: '100',
                                    placeholder: 'Required',
                                    label: 'First Name',
                                    validateWhileTyping: true,
                                    validate: function (event, form, input, label, $, CXBus, Common) {
                                        if (input && input.val() && input.val().length >= 4) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                },
                                {
                                    id: 'cx_webchat_form_email',
                                    name: 'email',
                                    maxlength: '100',
                                    placeholder: 'Required',
                                    label: 'Email',
                                    validateWhileTyping: false,
                                    validate: function (event, form, input, label, $, CXBus, Common) {
                                        let mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                        if (input && input.val() && mailRegEx.test(input.val())) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                },
                                {
                                    id: 'cx_webchat_form_subject',
                                    name: 'subject',
                                    maxlength: '100',
                                    placeholder: 'Optional',
                                    label: 'Subject',
                                },
                            ],
                        },
                    },
                    sidebar: {
                        showOnStartup: true,
                        position: 'right',
                        expandOnHover: true,
                        channels: [
                            {
                                name: 'WebChat',
                            },
                            {
                                displayName: 'Co-browse',
                                displayTitle: 'Start Co-browse',
                                icon: 'cobrowse',
                                onClick: function () {
                                    startCoBrowse();
                                },
                            },
                        ],
                    },
                },
            };

            var widgetBaseUrl = 'https://apps.' + w2_baseUrl + '/widgets/9.0/',
                widgetScriptElement = document.createElement('script');
            widgetScriptElement.setAttribute('src', widgetBaseUrl + 'cxbus.min.js');
            widgetScriptElement.addEventListener('load', function () {
                CXBus.configure({
                    debug: false,
                    pluginsPath: widgetBaseUrl + 'plugins/',
                });
                CXBus.loadPlugin('widgets-core');
            });
            document.head.append(widgetScriptElement);

            var cobrowseScriptElement = document.createElement('script');
            cobrowseScriptElement.setAttribute('src', 'https://cobrowse.' + w2_baseUrl + '/cobrowse-jsapi-v1.js?deploymentKey=' + w2_coBrowseDeploymentKey);
            cobrowseScriptElement.addEventListener('load', function () {
                window.startCoBrowse = function () {
                    window.PureCloud.cobrowse.startSharing(
                        {
                            locale: 'en',
                            participant: {
                                displayName: 'Customer',
                            },
                        },
                        function (err, sharerSession) {
                            if (err) {
                                console.error('Unable to share page', err.stack || err);
                            }

                            console.log('Co-browse initiated. Page is being shared.');
                            if (window._genesys.widgets !== 'undefined') {
                                //var message = '**Customer has started a Co-browse session:** Please right click on this [link]('+ sharerSession.getViewerUrl() +') and select to open in a new browser tab';
                                var message =
                                    '**The customer has requested a Co-browse session:** Please copy the session ID into the Co-browse Script Window: ' + sharerSession.getCobrowseSession().data.code;
                                CXBus.command('WebChatService.sendFilteredMessage', { message: message, regex: /\*\*The customer has requested a Co-browse session:\*\*.*/ });
                            }
                        }
                    );
                };
            });
            document.head.append(cobrowseScriptElement);
        } else {
            window._genesys = {
                widgets: {
                    main: {
                        preload: ['webchat'],
                        theme: 'light',
                    },
                    webchat: {
                        chatButton: {
                            enabled: true,
                        },
                        transport: {
                            type: 'purecloud-v2-sockets',
                            dataURL: 'https://api.' + w2_baseUrl,
                            deploymentKey: w2_deploymentKey,
                            orgGuid: w2_orgId,
                            interactionData: {
                                routing: {
                                    targetType: 'QUEUE',
                                    targetAddress: w2_queueName,
                                    priority: 2,
                                },
                            },
                        },
                        form: {
                            wrapper: '<table></table>',
                            inputs: [
                                {
                                    id: 'cx_webchat_form_firstname',
                                    name: 'firstname',
                                    maxlength: '100',
                                    placeholder: 'Required',
                                    label: 'First Name',
                                    validateWhileTyping: true,
                                    validate: function (event, form, input, label, $, CXBus, Common) {
                                        if (input && input.val() && input.val().length >= 4) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                },
                                {
                                    id: 'cx_webchat_form_email',
                                    name: 'email',
                                    maxlength: '100',
                                    placeholder: 'Required',
                                    label: 'Email',
                                    validateWhileTyping: false,
                                    validate: function (event, form, input, label, $, CXBus, Common) {
                                        let mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                        if (input && input.val() && mailRegEx.test(input.val())) {
                                            return true;
                                        } else {
                                            return false;
                                        }
                                    },
                                },
                                {
                                    id: 'cx_webchat_form_subject',
                                    name: 'subject',
                                    maxlength: '100',
                                    placeholder: 'Optional',
                                    label: 'Subject',
                                },
                            ],
                        },
                    },
                    extensions: {},
                },
            };

            var widgetBaseUrl = 'https://apps.' + w2_baseUrl + '/widgets/9.0/',
                widgetScriptElement = document.createElement('script');
            widgetScriptElement.setAttribute('src', widgetBaseUrl + 'cxbus.min.js');
            widgetScriptElement.addEventListener('load', function () {
                CXBus.configure({
                    debug: false,
                    pluginsPath: widgetBaseUrl + 'plugins/',
                });
                CXBus.loadPlugin('widgets-core');
            });
            document.head.append(widgetScriptElement);
        }

        if (w2GpeSwitch == 'on') {
            (function (a, t, c, l, o, u, d) {
                a['_genesysJourneySdk'] = o;
                (a[o] =
                    a[o] ||
                    function () {
                        (a[o].q = a[o].q || []).push(arguments);
                    }),
                    (a[o].l = 1 * new Date());
                (u = t.createElement(c)), (d = t.getElementsByTagName(c)[0]);
                u.async = 1;
                u.src = l;
                u.charset = 'utf-8';
                d.parentNode.insertBefore(u, d);
            })(window, document, 'script', 'https://apps.' + w2_baseUrl + '/journey/sdk/js/web/v1/ac.js', 'ac');
            ac('init', w2_orgId, { region: w2_environment });
            ac('pageview');
        }
    }

    if (w3Switch == 'on') {
        (function (g, e, n, es, ys) {
            g['_genesysJs'] = e;
            g[e] =
                g[e] ||
                function () {
                    (g[e].q = g[e].q || []).push(arguments);
                };
            g[e].t = 1 * new Date();
            g[e].c = es;
            ys = document.createElement('script');
            ys.async = 1;
            ys.src = n;
            ys.charset = 'utf-8';
            document.head.appendChild(ys);
        })(window, 'Genesys', 'https://apps.' + w3_baseUrl + '/genesys-bootstrap/genesys.min.js', {
            environment: w3_environment,
            deploymentId: w3_deploymentKey,
        });
    }

    if (w4Switch == 'on') {
        if (w2Switch == 'on') {
            if (!window._genesys.widgets.extensions) {
                window._genesys.widgets.extensions = {};
            }
            window._genesys.widgets.extensions['oPlugin'] = function ($, CXBus, Common) {
                var oPlugin = CXBus.registerPlugin('oPlugin');

                setInterval(function () {
                    $.ajax({
                        type: 'POST',
                        url: 'https://gcloud-app.herokuapp.com/chat/status',
                        data: {
                            clientId: w4_clientId,
                            clientSecret: w4_clientSecret,
                            scheduleGroupId: w4_scheduleGroupId,
                            emergencyGroupId: w4_emergencyGroupId,
                            queueId: w4_queueId,
                            regionHost: w4_regionHost,
                        },
                        dataType: 'json',
                        success: function (data) {
                            if (data.status == 'hide') {
                                if (w2CobrowseSwitch == 'on') {
                                    oPlugin.command('SideBar.close');
                                } else {
                                    oPlugin.command('WebChat.hideChatButton');
                                }
                            } else {
                                if (w2CobrowseSwitch == 'on') {
                                    oPlugin.command('SideBar.open');
                                } else {
                                    oPlugin.command('WebChat.showChatButton');
                                }
                            }
                        },
                    });
                }, 5000);
            };
        }
    }
}
