/*
POLYFILL --> código que adiciona uma feature que
a engine por ventura não possua.
Usado para retrocompatibilidade com engines mais antigas
*/
// polyfill
if (!Object.create) {
    Object.create = function(o) {
        if (arguments.length > 1) {
            throw new Error('Object.create implementation' +
                ' only accepts the first parameter.');
        }

        function F() {};
        F.prototype = o;
        return new F();
    };
}

//##########################################

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

var john = Object.create(person);
console.log(john);
console.log(john.greet());

john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);
console.log(john.greet());
