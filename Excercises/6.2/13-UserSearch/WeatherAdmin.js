const userSearch = require("./UserSearch.js");
const fs = require('fs');

function WeatherAdmin() {
    if(!(this instanceof WeatherAdmin))
        return new WeatherAdmin();

    this.newUserSearch = function (name, location) {
        var search = new userSearch(name, location)
        search.getWeather();

        var userInfo = search.name + " " + search.location + " " + search.date +"\n";

        fs.appendFile("log.txt", userInfo, function(derp) {
            if (derp) 
                return console.log(derp);
        });
    }

    this.getData = function () {
        fs.readFile("log.txt", "utf8", function(derp, data) {
            if (derp) 
                return console.log(derp);
            
            console.log(data);
        });
    }

}

module.exports = WeatherAdmin;