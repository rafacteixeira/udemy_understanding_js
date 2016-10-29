var g = G$('John', 'Doe');
console.log(g);

// g.greet(true)
//     .greet(false)
//     .setLang('es')
//     .greet(true)
//     .greet(false)
//     .setLang('pt_BR');

//g.setLang('en').HTMLGreet($('#greeting'), false);

$('#login').click(function() {

    $('#logindiv').hide();
    var loginGrtr = G$('John', 'Doe', $('#lang').val()).HTMLGreet('#greeting', true).log();
});
