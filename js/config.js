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

function updateConfig(form) {
    let formData = $(form).serializeObject();
    localStorage.setItem('configData', JSON.stringify(formData));
}

function setConfigFormDefaultValues() {
    let formData = localStorage.getItem('configData');
    if (formData) {
        formData = JSON.parse(formData);
        for (const key in formData) {
            if (Object.hasOwnProperty.call(formData, key)) {
                $('[name=' + key + ']').val(formData[key]);
            }
        }
    }
}
