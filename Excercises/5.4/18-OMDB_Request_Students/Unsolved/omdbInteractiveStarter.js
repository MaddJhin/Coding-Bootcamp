// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

const request = require("request");

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
process.argv
var movieName = [];
for (let i = 2; i < process.argv.length; i++){
  movieName.push(process.argv[i]);
}

movieName = movieName.join("+");
// Grab or assemble the movie name and store it in a variable called "movieName"

// ...

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// Then create a request to the queryUrl
// ...
request(queryUrl, function(error, data, body){
  // If the request is successful
  // ...
  if  (error)
    throw error;

  // Then log the Release Year for the movie
  // ...
  console.log(JSON.parse(body).Year);
  
});