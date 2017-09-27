var student = require("./student.js");

function ClassRoom(professor, room) {
    this.students = [];
    this.professor = professor;
    this.roomNumber = room;
    this.numberOfStudents = function () {
        return this.student.length;
    };
}

ClassRoom.prototype.addStudent = function addStudent(name, favorite, gpa) {
    var newStudent = new student(name, favorite, gpa);
    this.students.push(newStudent);
}

module.exports = ClassRoom;