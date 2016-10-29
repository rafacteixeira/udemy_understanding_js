(function(global, $) {

    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    }

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    }

    Greetr.prototype = {};

    Greetr.init = function(firstname, lastname, language) {

        var self = this;
        self.firstName = firstname || '';
        self.lastName = lastname || '';
        self.language = language || 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
