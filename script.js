const forecast = require('./forecast.js');
const geocode = require('./geocode.js');

const userInput = process.argv[2];
geocode(userInput, (error, geodata) => {

    forecast(geodata.latitude, geodata.longitude, (error, data) => {

        console.log(geodata.place_name);
        console.log(data);
    });

});

