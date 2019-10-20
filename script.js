const forecast = require('./forecast.js');
const geocode = require('./geocode.js');

const userInput = process.argv[2];

geocode(userInput, (error, {latitude, longitude, place_name}) => {
    if(!userInput){
       return console.log(error, "Please enter the location you want to know weather from!!");
    }

    forecast(latitude, longitude, (error, data) => {
        console.log("================================");
        console.log(place_name);
        console.log(data);
    });

});



