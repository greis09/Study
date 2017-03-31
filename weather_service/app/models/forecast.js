module.exports.getForecast = function (lat, lng, callback) {
    var request = require('request');

    var latitude = 'lat=' + lat;
    var longitude = '&lon=' + lng
    var limitation = '&units=metric&APPID=609e9dd07b9cd8cec64c2de5310fc805'
    var url = 'http://api.openweathermap.org/data/2.5/forecast?' + latitude + longitude + limitation;

    request.get(encodeURI(url), function (err, res, body) {
        if (!err) {
            data = JSON.parse(body);

            var result = {
                city: data.city.name,
                forecast: []
            };
            for (var element of data.list) {
                var condition = {
                    date: element.dt_txt,
                    main: element.weather[0].description,
                    min: element.main.temp_min,
                    max: element.main.temp_max
                }
                result.forecast.push(condition);
            }
            console.log(result);
            callback(err, result);
        }
    })
};