const request = require('request');


const forecast = (latitude, longitude, callback) => {

    const forecastURL = "https://api.darksky.net/forecast/9048eeb6f17c485ebca86ea51abfe304/" + latitude + "," + longitude + "";
    request({ url: forecastURL, json: true }, (error, response) => {

        if (error) {
            callback(": Unable to connect to internet! Please check your internet connection", undefined);
        }
        else if (response.body.error) {
            callback(": Prblem getting longitude and latitude!", undefined);
        }

        else {
            callback(undefined, "It is " + response.body.currently.summary + " with a current tempreture of " + response.body.currently.temperature + " and chances of rain of " + response.body.currently.precipProbability + "%");
        }
    });
}



module.exports = forecast



