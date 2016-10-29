(function(global, $) {

})(window, jQuery);
    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
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
