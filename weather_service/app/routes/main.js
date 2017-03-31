module.exports = function (application) {
    application.post("/", function (req, res) {
        application.app.controllers.forecast.getForecast(application, req, res, function (result) {
            if (result.error === '') {
                res.send(result.data);
            }
            else {
                res.send(JSON.stringify(result.error));
            }
        });
    });
};