// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Specify the port.
var port = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
];

// Routes
app.get('/icecream/:name', function (req, res) {
    var icecream = req.params.name;
    console.log(icecream);
    var found = icecreams.filter(function(element) { return element.name === icecream; });
    console.log(found[0]);
    res.render("index", found[0]);
});

app.get('/icecreams', function (req, res) {
    res.render('all-icecream', {
        icecreams: icecreams
    });
});

console.log("Testing");

app.listen(port);