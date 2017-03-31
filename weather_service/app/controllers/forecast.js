module.exports.getForecast = function (application, req, res, callback) {
    var param = req.body;
    param.postalCode = param.postalCode.replace(/-/gi, '');
    response = {
        error: '',
        data: ''
    };
    if (param.postalCode === '' && param.placeName === '') {
        response.error = { error: 'Ao menos um parametro deve ser informado' };
        callback(response);
    }
    else {
        application.app.models.location.getLocation(param, function (err, lat, lng) {
            if (!err) {
                application.app.models.forecast.getForecast(lat, lng, function (err, result) {
                    response.data = result;
                    callback(response);
                });
            }
            else {
                response.error = { error: 'Localidade não encontrada' };
                callback(response);
            }
        });
    }
}