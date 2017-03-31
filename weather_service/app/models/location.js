module.exports.getLocation = function (param, callback) {
    var request = require('request');

    var url = 'http://api.geonames.org/postalCodeSearchJSON?'
    if (param.postalCode !== '') {
        var filter = 'postalcode=' + param.postalCode;
    }
    else {
        var filter = 'placename=' + param.placeName;
    }
    var user = '&username=greis09'
    url = url + filter + user;

    request.get(encodeURI(url), function (err, res, body) {
        if (!err) {
            data = JSON.parse(body);
            if (data.postalCodes[0] === undefined) {
                callback(404, '', '');
                return;
            }
            var lat = data.postalCodes[0].lat;
            var lng = data.postalCodes[0].lng;
            callback(err, lat, lng);
        }
    })
};