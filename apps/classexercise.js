'use strict'

var assert = require("assert");

var classrooms = {
  class1: [], //students whose LAST name begins with a-h
  class2: [], //students whose LAST name begins with  i-p
  class3: [] //students whose LAST name beginz with q-z
};


//should add newStudent to the correct classroom
function addStudent(newStudent){
  //determine which classroom the student should be placed into

  //access the array associated with that classroom number within the classrooms associative array

  //add the student to that array
  /*  newStudent = newStudent.toLowerCase();
    
    var studentName = newStudent.split(" ")[1];
    var lastName = studentName[1];
    var firstLetter = lastName[0];
    var classroom = -1;
    
    if (firstLetter <= "h") {
        classroom = "class1";
    } else if (firstLetter > "h" && firstLetter <= "p") {
        classroom = "class2";
    } else (firstLetter > "p") 
        classroom = "class3"; */
    
    var lastName = newStudent.split(" ")[1];
    var classroomNumber = getClassroom(lastName[0]);
    
    var newIndex
    
}

//should remove the last student from that classroom identified by classRoomNumber
function removeStudent(classroomNumber){
    //access the array associated with classroomNumber within the classrooms associative array

    //remove the last student from that array

    //return the name of the student that was removed
    
    return [classrooms];
}

function getClassSize(classroomNumber){
  //access the array associated with classroomNumber within the classrooms associative array

  //return the number of items/students in that array
    
    
}

//should get the number of the classroom for the student based on their last name (contained within variable lastName)
function getClassroom(lastName){
  //SCRUB

  //get first letter of lastName

  //use that letter to determine whether to return "1", "2", or "3"
    

}

function reset(){
  classrooms = {
    class1: [],
    class2: [],
    class3: []
  };
}

describe('#addStudent', function () {
    it('given a student, function should add that student to appropriate classroom', function () {
        reset();
        addStudent("Bill Bryson");
        assert.equal(classrooms.class1[0], "Bill Bryson");
    });
});

describe('#removeStudent', function () {
    it('given a classroom number, function should remove a student from that class and return the student removed', function () {
        reset();
        classrooms["class1"][classrooms["class1"].length] = "John Wayne";
        assert.equal(removeStudent(1), "John Wayne");
    });
});

describe('#getClassSize', function () {
    it('given a classroom number, function should return the number of students in that class', function () {
      reset();
      classrooms["class2"][classrooms["class2"].length] = "Harry Potter";
      classrooms["class2"][classrooms["class2"].length] = "Ron Weasley";
      classrooms["class2"][classrooms["class2"].length] = "Hermione Granger";
        assert.equal(getClassSize(2), 3);
    });
});