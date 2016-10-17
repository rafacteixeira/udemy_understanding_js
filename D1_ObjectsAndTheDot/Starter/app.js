var person = new Object();

person["firstName"] = "Rafael";
person["lastName"] = "Cruz";

var firstName = "firstName";

console.log(person);
console.log(person[firstName]);
console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "Rua Araxá";
person.address.city = "Belo Horizonte";
person.address.state = "Minas Gerais";
person.address.number = 272;
person.address.complement = "Ap 101";

console.log(person);
console.log(person["address"].complement);
