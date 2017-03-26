var http = require("http");

http.createServer(function(req, res){
	var categoria = req.url;

	switch(categoria){
		case"/tecnologia":
		res.end("<html><body>Portal da rola tecnologica</body></html>");
		break;
		case "/moda":
		res.end("<html><body>Moda de cu é rola</body></html>");
		break;
		default:
		res.end("<html><body>Portal da minha rola</body></html>");	
	}
	
}).listen(3000);
