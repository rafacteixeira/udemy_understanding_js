var g = G$('John', 'Doe');
console.log(g);

g.greet(true)
    .greet(false)
    .setLang('es')
    .greet(true)
    .greet(false)
    .setLang('pt_BR');
