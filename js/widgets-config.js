let configData = localStorage.getItem('configData');
if (configData) {
    configData = JSON.parse(configData);

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
                    dataURL: 'https://api.' + configData.baseUrl,
                    deploymentKey: configData.deploymentKey,
                    orgGuid: configData.orgId,
                    interactionData: {
                        routing: {
                            targetType: 'QUEUE',
                            targetAddress: configData.queueName,
                            priority: 2,
                        },
                    },
                },
            },
            extensions: {},
        },
    };

    var widgetBaseUrl = 'https://apps.' + configData.baseUrl + '/widgets/9.0/',
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

    window._genesys.widgets.extensions['oPlugin'] = function ($, CXBus, Common) {
        var oPlugin = CXBus.registerPlugin('oPlugin');

        setInterval(function () {
            jQuery.get('https://gcloud-app.herokuapp.com/chat/status').done(function (data) {
                if (data.status == 'hide') {
                    oPlugin.command('WebChat.hideChatButton');
                } else {
                    oPlugin.command('WebChat.showChatButton');
                }
            });
        }, 5000);
    };
}
