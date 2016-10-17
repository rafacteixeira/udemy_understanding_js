function greet(firstname, lastname, language) {
     language = language || 'en';

     if (language === 'en') {
         console.log('Hello ' + firstname + ' ' + lastname);
     } else if (language === 'es') {
         console.log('Hola ' + firstname + ' ' + lastname);
     }
}


greet('Rafael', 'Cruz', 'en');
greet('Rafael', 'Cruz', 'es');


function greetEnglish(firstname, lastname) {
    greet(firstname,lastname,'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname,lastname,'es');
}

greetEnglish("Rafa", "Cruz");
greetSpanish("Rafa", "Cruz");
