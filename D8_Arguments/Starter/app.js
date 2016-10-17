function greet(firstname, lastname, language) {

    language = language || 'en';

    if (arguments.length === 0) {
        console.log("Missing parameters!");
        console.log("---------------");
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log("---------------");
}

greet();
greet('Rafael');
greet('Rafael','Cruz');
greet('Rafael','Cruz','pt_BR');
