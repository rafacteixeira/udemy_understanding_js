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
var john = new Person("john", "doe");
console.log(john.getFullName());

var jane = new Person("jane", "doa");
console.log(jane.getFullName());
