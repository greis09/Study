module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
};

module.exports.salvar_noticia = function (app, req, res) {
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve ter enter 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();
    console.log(erros);
    if (erros) {
        console.log(erros);
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.Models.noticiasModel(connection);

    noticiasModel.insertNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    })
};