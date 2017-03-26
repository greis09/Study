function Noticias(connection){
	this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback);
}

Noticias.prototype.getNoticia = function(query, callback){
	this._connection.query('select * from noticias where id_noticia = '+ query.id_noticia, callback);
}

Noticias.prototype.insertNoticia = function(noticia, callback){
	var query = "insert into noticias (titulo, noticia, resumo) values ('"+noticia.titulo+"', '"+noticia.noticia+"', '"+noticia.resumo+"');";
	this._connection.query(query, callback);
}

Noticias.prototype.getNoticiasHome = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function(){

	return Noticias;
}