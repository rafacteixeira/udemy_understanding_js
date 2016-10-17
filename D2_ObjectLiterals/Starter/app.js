var Rafael = {
  firstName: 'Rafael',
  lastName: 'Cruz',
  address: {
    street: "Rua Araxá",
    number: 272,
    state: "Minas Gerais",
    city: "Belo Horizonte",
    complement: "Ap 101"
  }
};
console.log(Rafael);


function greet(person) {
  console.log("Hi " + person.firstName);
}

greet(Rafael);

greet({firstName:"Mary", lastName: "Doe"});
