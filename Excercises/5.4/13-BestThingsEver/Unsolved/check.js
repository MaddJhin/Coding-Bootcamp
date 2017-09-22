var fs = require("fs");

fs.readFile("best_things_ever.txt","utf8", function (derp, data) {
    
    if (derp) {
        throw derp;
    }

    var dataArray = data.split(",");

    console.log(dataArray);
})