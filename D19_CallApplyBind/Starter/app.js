var person = {
    firstname: 'Rafael',
    lastname: 'Cruz',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(arg1, arg2) {
    console.log('Loggerd: ' + this.getFullName());
    console.log('Arguments: ' +arg1 + ' & ' +arg2);
    console.log('-------------------------')
}.bind(person);

//bind altera o que o this aponta dentro da function
//this agora aponta para o objeto person
//Bind cria uma cópia da function em memória, alterando o contexto, pois troca o valor do this da function
var logPersonName = logName.bind(person);

logPersonName("en", "es");

logName("pt_BR", "ar_AR");

//Usando CALL, vc passa como parâmetro qual o valor do this da função
/*
usando call, não cria cópia da function
apenas decide em tempo de execução qual será o valor do this.
*/
logName.call(person,"invoke", "Using call");

/*
APPLY faz a mesma coisa que CALL, porém recebe um array com os argumentos da function
dá erro se não for array
*/
logName.apply(person,["invoke", "Using apply"]);


(function(arg1, arg2) {
    console.log('Loggerd: ' + this.getFullName());
    console.log('Arguments: ' +arg1 + ' & ' +arg2);
    console.log('-------------------------')
}).apply(person,['IIFE invoked','using apply']);
(function(arg1, arg2) {
    console.log('Loggerd: ' + this.getFullName());
    console.log('Arguments: ' +arg1 + ' & ' +arg2);
    console.log('-------------------------')
}).call(person,'IIFE invoked','using call');



//Function borrowing
var person2 = {
    firstname: 'Samila',
    lastname: 'Vieira'
}
console.log(person.getFullName.apply(person2));



/*Function currying --> criar uma cópia de uma function,
mas deixando alguns parâmetros com valores pré-definidos.
*/
function multiply(a,b) {
    return a*b;
}

/*
Quando se usa bind e um uma function e passa parâmetros
além do que será o this, você está fixando o valor
dos parâmetros da function.
no caso abaixo
multiply recebe dois params, e o bind está fixando o valor
do primeiro como 2, entao a function nova (cópia criada
pelo bind), passa a receber apenas um parametro,
pois o outro foi fixado no bind, e sempre multiplicará
o parâmetro recebido por 2
*/
var multiplyByTwo = multiply.bind(this,2);

console.log(multiplyByTwo(13));

var allwaysFour = multiply.bind(this,2,2);
console.log(allwaysFour());
