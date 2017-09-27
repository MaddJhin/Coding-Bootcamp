const user = require("./UserSearch.js");
const admin = require("./WeatherAdmin.js");

var userSearch = user("Bob", "San Francisco, CA");
var adminSearch = new admin();

// search.getWeather();
// adminSearch.newUserSearch("Boby", "Tampa, FL");

adminSearch.getData();