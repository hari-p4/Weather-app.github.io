const request = require('request');

const geocode = (userInput, callback) => {


    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + userInput + ".json?limit=2&access_token=pk.eyJ1IjoiaGFyMTIzIiwiYSI6ImNrMW83ZHJsbDBpN3ozcXFmcjd4Zm11dHQifQ.QcjxXW4bwnwGHUiKMtSbpw"
    request({ url: url, json: true }, (error, {body}) => {

        if (error) {
            callback("Problem with either URL or internet connection!!");
        }
        else
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                place_name: body.features[0].place_name
            })
    });

}


module.exports = geocode


