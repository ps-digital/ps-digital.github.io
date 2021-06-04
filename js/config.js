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
