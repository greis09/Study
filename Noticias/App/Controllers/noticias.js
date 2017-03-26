module.exports.noticias = function (app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.Models.noticiasModel(connection);

    noticiasModel.getNoticias(function (error, result) {
        res.render("noticias/noticias", { noticias: result });
    })
};

module.exports.noticia = function (id, app, req, res) {
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.Models.noticiasModel(connection);

    noticiasModel.getNoticia(req.query, function (error, result) {
        res.render('noticias/noticia', { noticia: result });
    })
};