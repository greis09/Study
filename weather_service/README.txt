Service: 
	Executar arquivo service.js da na pasta weather_service.
	O serviço irá subir na porta 3000.
	O serviço espera uma chamada POST passando um JSON como parametro. 
	O JSON deve ser nesse formato: 
	{  
		"postalCode":"",
		"placeName":""
	}
	Pelo menos um dos parametros deve ser preenchido. 
	Postal code deve ser preenchido com código postais seguindo as seguintes regras:
		For Canada we have only the first letters of the full postal codes (for copyright reasons)
		For Ireland we have only the first letters of the full postal codes (for copyright reasons)
		For Malta we have only the first letters of the full postal codes (for copyright reasons)
		The Argentina data file contains 4-digit postal codes which were replaced with a new system in 1999.
		For Brazil only major postal codes are available (only the codes ending with -000 and the major code per municipality).
	