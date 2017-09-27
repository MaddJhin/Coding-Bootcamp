const weather = require('weather-js');

function UserSearch(name, location) {
    if(!(this instanceof UserSearch))
        return new UserSearch(name, location);

    this.name = name;
    this.location = location;
    this.date = Date.now();

    this.getWeather = function () {
        weather.find({
            search: this.location, 
            degreeType: 'F'
        }, function(derp, result) {
            if(derp) 
                console.log(derp);
           
            console.log(JSON.stringify(result[0].current, null, 2));
          });
    }
}

module.exports = UserSearch;