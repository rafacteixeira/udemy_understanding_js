//function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('Rafael');

//function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('Rafael');

// Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    return 'Hello ' + name;
}('Rafael');
console.log(greeting);


console.log('---------------------------------------')

var firstname = 'Rafael';
(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    //return 'Hello ' + name;
}(firstname));// invocado no parentese de dentro

(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    //return 'Hello ' + name;
})(firstname);// invocado no parentese de fora
