String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log("Rafael".isLengthGreaterThan(4));


Number.prototype.isPositive = function() {
    return this > 0;
}
var a = new Number(3)
console.log(a.isPositive());


var a = 3;
var b = new Number(3);

console.log(a == b);
console.log(a === b);

Array.prototype.myCustomProperty = 'que legal lol';
var arr = ['Rafa', 'Cruz', 'PDQ'];
for (var val in arr) {
    console.log(val + ': ' + arr[val]);
}
/*
Não usar FOR IN para iterar em arrays.
ele lê todas as propriedades do objeto Array
*/
