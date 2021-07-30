$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function showLoading() {
    return bootbox.dialog({
        message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Loading...</div>',
        closeButton: false,
    });
}

function updateConfig() {
    let formData = $('form').serializeObject();
    let email = formData.email;

    if (email == 'bilal@emeapspractices.com') {
        bootbox.alert({
            message: `<span class="text-danger">❌ Validation Error: </span>Please use a different email address.`,
            backdrop: true,
            className: 'rubberBand animated',
        });

        return false;
    }

    let switchArray = [formData.w1_switch, formData.w2_switch, formData.w3_switch];
    let onCounts = switchArray.filter((x) => x === 'on').length;

    if (onCounts > 1) {
        bootbox.alert({
            message: `<span class="text-danger">❌ Validation Error: </span>Please select only one either Widgets v1 or v2 or Web Messaging`,
            backdrop: true,
            className: 'rubberBand animated',
        });

        return false;
    }

    let dialog = showLoading();

    $.post('https://gcloud-app.herokuapp.com/config/record/upsert', { email: email, data: formData }).done(function (data) {
        dialog.modal('hide');
        localStorage.setItem('configData', JSON.stringify(formData));

        bootbox.alert({
            message: `<span class="text-success">✔ Success: </span>Your data has been succesfully saved!`,
            backdrop: true,
            className: 'rubberBand animated',
            callback: function () {
                window.location.reload();
            },
        });
    });
}

function loadConfig() {
    let formData = $('form').serializeObject();
    let email = formData.email;

    let dialog = showLoading();

    $.post('https://gcloud-app.herokuapp.com/config/record/get', { email: email })
        .done(function (data) {
            dialog.modal('hide');
            if (data.data) {
                localStorage.setItem('configData', JSON.stringify(data.data));
                setConfigFormDefaultValues();
                window.location.reload();
            }
        })
        .fail(function (error) {
            dialog.modal('hide');
            bootbox.alert({
                message: `E-Mail <span class="text-info">${email}</span> is not found! Please fill out the details below and click on <span class="text-info">Update</span> to get your details saved`,
                backdrop: true,
                className: 'rubberBand animated',
            });
        });
}

function setConfigFormDefaultValues() {
    let formData = localStorage.getItem('configData');
    if (formData) {
        formData = JSON.parse(formData);
        for (const key in formData) {
            if (Object.hasOwnProperty.call(formData, key)) {
                if (key.includes('switch')) {
                    $('[name=' + key + ']').prop('checked', formData[key]);
                } else {
                    $('[name=' + key + ']').val(formData[key]);
                }
            }
        }
    }
}

function loadBootstrapTable(dataUrl, table) {
    $.getJSON(dataUrl, function (data) {
        let tableData = [];
        data.forEach((element) => {
            let tableRowJson = {};
            tableRowJson['timestamp'] = element.body.timestamp;
            tableRowJson['conversationId'] = element.conversationid;
            tableRowJson['message'] = element.body.message;
            tableRowJson['rating'] = element.body.rate;

            tableData.push(tableRowJson);
        });

        $('#' + table).bootstrapTable({
            data: tableData,
            stickyHeader: true,
        });
    });
}

function datesSorter(a, b) {
    if (new Date(a) < new Date(b)) return 1;
    if (new Date(a) > new Date(b)) return -1;
    return 0;
}

function getTopDomain() {
    var i,
        h,
        weird_cookie = 'weird_get_top_level_domain=cookie',
        hostname = document.location.hostname.split('.');
    for (i = hostname.length - 1; i >= 0; i--) {
        h = hostname.slice(i).join('.');
        document.cookie = weird_cookie + ';domain=.' + h + ';';
        if (document.cookie.indexOf(weird_cookie) > -1) {
            // We were able to store a cookie! This must be it
            document.cookie = weird_cookie.split('=')[0] + '=;domain=.' + h + ';expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            return h;
        }
    }
}

function resetGPESession() {
    document.cookie.split(';').forEach(function (cookie) {
        var cookieName = cookie.trim().split('=')[0];
        // If the prefix of the cookie's name matches the one specified, remove it
        if (cookieName.indexOf('_act') === 0) {
            console.log(cookieName);

            // Remove the cookie
            document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;domain=.' + getTopDomain();
        }

        if (cookieName.indexOf('_genesys') === 0) {
            console.log(cookieName);

            // Remove the cookie
            document.cookie = cookieName + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        }
    });

    bootbox.alert({
        message: `<span class="text-success">✔ Success: </span>A new Predictive Engagement session is created!`,
        backdrop: true,
        className: 'rubberBand animated',
        callback: function () {
            window.location.reload();
        },
    });
}
