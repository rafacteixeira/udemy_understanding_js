var person = {
    firstname: "default",
    lastname: "default",
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}
var jane = {
    firstname: "Jane"
}

//Don't do this EVER. Demo purposes only!
john.__proto__ = person;
console.log(john.getFullName());
jane.__proto__ = person;
console.log(jane.getFullName());
console.log("=============================");


var a = {};
var b = function() {};
var c = [];
