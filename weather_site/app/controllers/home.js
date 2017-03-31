module.exports.home = function (application, req, res) {
    res.render("home", { errors: '' });
};

module.exports.getForecast = function (application, req, res) {
    var param = req.body;
    param.postalCode = param.postalCode.replace(/-/gi,'');
    application.app.models.location.getLocation(param, function (err, lat, lng) {
        if (!err) {
            application.app.models.forecast.getForecast(lat, lng, function (err, result) {
                res.render('forecast', { result: result })
            });
        }
        else {
            res.render("home", { errors: 'Localidade não encontrada.' });
        }
    });
}

