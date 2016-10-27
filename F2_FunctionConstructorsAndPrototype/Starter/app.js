function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function was invoked.');
    this.getFullName = function() {
        return this.firstname + ' ' + this.lastname;
    }
}
/*
new é um operador
quando new é usado, um Objeto vazio é criado
em seguida invoca a function, mas faz com o que this da function aponte
para o objeto em branco criado.
com isso, se vc manipula o this, adicionando variaveis e funcoes,
isso afeta diretamente o objeto em branco criado.
*/

/*
A propriedade "prototype" da function que é o construtor de um objeto
não é o prototype da function ( o __proto__)
é a propriedade que vai vir a ser o __proto__ de
um objeto criado usando o new naquela function

O ideal é adicionar as propriedades (atributos) no Function Constructor,
e adicionar os métodos ao prototype, por questão de memória
se adicionar os métodos à function, cada objeto criado terá uma
cópia da function.
Se usar o prototype, apenas ele terá a function, e todos os objetos buscarão nele
para executar aquele código
*/
Person.prototype.getFullName2 = function() {
    return this.firstname + ' ' + this.lastname + ' function 2';
}

var john = new Person("john", "doe");
console.log(john);
console.log(john.getFullName2());
var jane = new Person("jane", "doa");
console.log(jane);
console.log(jane.getFullName2());

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());
console.log(jane.getFormalFullName());
