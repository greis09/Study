module.exports = function (application) {
	application.get("/", function (req, res) {
		application.app.controllers.home.home(application, req,res);
	});

	application.post("/", function (req, res) {
		application.app.controllers.home.getForecast(application, req,res);
	});
};