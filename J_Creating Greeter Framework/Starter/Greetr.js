(function(global, $) {

    //cria um novo objeto do framework, que é uma function
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    //variavel que determina quais linguagens serão suportadas. não é público para o programador.
    var supportedLangs = ['en', 'es'];

    //objeto que determina quais são os cumprimentos disponíveis. Não formais. Feito em objeto para poder acessar os atributos usando a notação [], já que temos a linguágem como atributo do objeto priincipal
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    //objeto que determina quais são os cumprimentos disponíveis. Formais. Feito em objeto para poder acessar os atributos usando a notação [], já que temos a linguágem como atributo do objeto priincipal
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    //objeto que determina quais são as mensagens de log disponíveis. Feito em objeto para poder acessar os atributos usando a notação [], já que temos a linguágem como atributo do objeto priincipal
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sessión'
    };

    //Definição do prototype do Objeto Function que representa o framework
    Greetr.prototype = {
        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function(lang) {
            if (supportedLangs.indexOf(lang) === -1) {
                throw 'Invalid language!';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '.';
        },

        greet: function(formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang: function(lang) {
            this.validate(lang);
            this.language = lang;
            return this;
        }
    };

    //Function Constructor que representa o objeto que será retornado framework for invocado
    Greetr.init = function(firstname, lastname, language) {

        var self = this;
        self.firstName = firstname || '';
        self.lastName = lastname || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
