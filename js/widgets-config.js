let configData = localStorage.getItem('configData');
if (configData) {
    configData = JSON.parse(configData);

    let w1Switch = configData['w1_switch'];
    let w2Switch = configData['w2_switch'];
    let w2GpeSwitch = configData['w2_gpe_switch'];
    let w2CobrowseSwitch = configData['w2_cobrowse_switch'];
    let w2SurveySwitch = configData['w2_survey_switch'];
    let w2TranscriptSwitch = configData['w2_transcript_switch'];
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

    /**
     * Logic to handle when the Widgets version 1 switch is ON
     */
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
                    url: 'https://ps-digital.github.io/images/logo.png',
                },
                companyLogoSmall: {
                    width: 25,
                    height: 25,
                    url: 'https://ps-digital.github.io/images/logo.png',
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

    /**
     * Logic to handle when the Widgets version 2 switch is ON
     */
    if (w2Switch == 'on') {
        // Define the fields for the chat form
        let form = {
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
        };

        /**
         * Logic to handle when the chat transcript switch is ON
         */
        if (w2TranscriptSwitch == 'on') {
            form.inputs.push({
                id: 'cx_webchat_form_transcript',
                name: 'transcript',
                maxlength: '100',
                placeholder: 'Required',
                label: 'Email chat transcript',
                wrapper: '<tr><th>{label}</th><td>{input}</td></tr>',
                type: 'checkbox',
            });
        }

        /**
         * Logic to handle when the Co-browse switch is ON
         */
        if (w2CobrowseSwitch == 'on') {
            window._genesys = {
                widgets: {
                    main: {
                        theme: 'light',
                        preload: ['webchat', 'sidebar'],
                        lang: 'en',
                    },
                    webchat: {
                        inviteOnRestoreTimeout: false,
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
                        form: form,
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
                        preload: ['webchat', 'webchatservice'],
                        theme: 'light',
                        debug: true,
                        lang: 'en',
                    },
                    webchat: {
                        inviteOnRestoreTimeout: false,
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
                        form: form,
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
                CXBus.loadFile('https://ps-digital.github.io/js/widgets-core.min.js');
                //CXBus.loadFile('http://dev.localhost.com:5500/js/widgets-core.min.js');
            });
            document.head.append(widgetScriptElement);
        }

        /**
         * Logic to handle when Predictive Engagement switch is ON
         */
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
            ac('pageview', {
                title: location.pathname,
            });

            ac('forms:track', '*', {
                captureFormDataOnAbandon: true,
                captureFormDataOnSubmit: false,
            });

            setTimeout(function () {
                ac('record', 'timeout30seconds_submitted');
            }, 30000);
        }

        /**
         * Logic to handle when the 3rd Party Survey switch is ON
         */
        if (w2SurveySwitch == 'on') {
            if (!window._genesys.widgets.extensions) {
                window._genesys.widgets.extensions = {};
            }

            window._genesys.widgets.extensions['oSurveyPlugin'] = function ($, CXBus, Common) {
                var oSurveyPlugin = CXBus.registerPlugin('SurveyPlugin');
                oSurveyPlugin.subscribe('WebChat.completed', function (data) {
                    let conversationId = data.data.id;
                    var surveyHtml = `
                <div class="container">
                    <table>
                        <tr>
                            <td>
                                <label class="cx-control-label i18n">How are you satisfied with our service?</label>
                            </td>
                        </tr>
                        <br/>
                        <tr>
                            <td>
                                <div class="rating" name="rating-score">
                                    <input id="star5" name="star" type="radio" value="5" class="radio-btn hide" />
                                    <label for="star5" >☆</label>
                                    <input id="star4" name="star" type="radio" value="4" class="radio-btn hide" />
                                    <label for="star4" >☆</label>
                                    <input id="star3" name="star" type="radio" value="3" class="radio-btn hide" />
                                    <label for="star3" >☆</label>
                                    <input id="star2" name="star" type="radio" value="2" class="radio-btn hide" />
                                    <label for="star2" >☆</label>
                                    <input id="star1" name="star" type="radio" value="1" class="radio-btn hide" />
                                    <label for="star1" >☆</label>
                                    <div class="clear"></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="cx-control-label i18n">Please share your comments with us!</label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <textarea class="cx-input cx-form-control" name="comments" maxlength="100" placeholder="Optional"></textarea>
                            </td>
                        </tr>
                    </table>
                </div>`;

                    oSurveyPlugin.command('WebChat.close');
                    oSurveyPlugin
                        .command('Toaster.open', {
                            type: 'generic',
                            title: 'Rate us',
                            body: surveyHtml,
                            icon: 'chat',
                            controls: 'close',
                            immutable: false,
                            buttons: {
                                type: 'binary',
                                primary: 'Submit',
                                secondary: 'No, thanks',
                            },
                        })
                        .done(function (e) {
                            $(e.html)
                                .find('.cx-btn.cx-btn-primary')
                                .on('click', function () {
                                    $.ajax({
                                        url: 'https://gcloud-app.herokuapp.com/survey/insert',
                                        dataType: 'json',
                                        type: 'post',
                                        data: {
                                            conversationId: conversationId,
                                            surveyBody: {
                                                message: $('[name=comments]').val(),
                                                rate: $('[name=star]:checked').val(),
                                                timestamp: new Date(),
                                            },
                                        },
                                        success: function (result, status, xhr) {
                                            console.log(result);
                                            oSurveyPlugin.command('Toaster.close').done(function () {
                                                oSurveyPlugin
                                                    .command('Toaster.open', {
                                                        type: 'generic',
                                                        title: 'Rate us',
                                                        body: `<table>
                                                    <tr>
                                                        <td>
                                                            <div class="cx-form-success" style="display: block; width: 30px;">
                                                                <span class="cx-icon cx-theme-icon-positive" data-icon="alert-checkmark"
                                                                    ><svg version="1.1" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                                                        <path class="cx-svg-icon-tone1" d="M50,.13A49.85,49.85,0,1,0,99.84,50,49.84,49.84,0,0,0,50,.13ZM40.62,76.75,21.08,57.21l9.63-9.63,9.64,9.63,28.9-28.9,9.63,9.63Z"></path></svg
                                                                ></span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="cx-form-success" style="display: block"><label class="cx-control-label i18n" data-message="Sent">Thank you for your participation</label></div>
                                                        </td>
                                                    </tr>
                                                </table>
                                                `,
                                                        icon: 'chat',
                                                        controls: 'close',
                                                        immutable: false,
                                                        buttons: {
                                                            type: 'default',
                                                            secondary: 'Close',
                                                        },
                                                    })
                                                    .done(function (e) {
                                                        $(e.html)
                                                            .find('.cx-btn.cx-btn-default')
                                                            .on('click', function () {
                                                                oSurveyPlugin.command('Toaster.close');
                                                            });
                                                    });
                                            });
                                        },
                                        error: function (xhr, status, error) {
                                            console.log(error);
                                        },
                                    });
                                });

                            $(e.html)
                                .find('.cx-btn.cx-btn-default')
                                .on('click', function () {
                                    oSurveyPlugin.command('Toaster.close');
                                });
                        });
                });
            };
        }
    }

    /**
     * Logic to handle when the Web Messager switch is ON
     */
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

    /**
     * Logic to handle when the Agent Availability switch is ON
     */
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
