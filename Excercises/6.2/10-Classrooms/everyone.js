var classRoom = require("./classroom.js");

var bootcamp = new classRoom("Bob", 301);

bootcamp.addStudent("Timmy", "Java Script", 2.5);
bootcamp.addStudent("Bobby", "HTML", 3.2);
bootcamp.addStudent("Jimmy", "CSS", 2.7);
bootcamp.addStudent("Ronny", "Node", 3.5);

console.log(bootcamp);