/*
Definição de Closure:
é uma feature de linguagem. define que uma função tem acesso
a todo o escopo de memória de onde ela foi criada.

Se ela foi criada dentro de uma function que ja saiu da pilha
do conetxto de execução, mesmo assim o espaço de
memória para variáveis e outras funções permanece alocado e acessível


Mesmo sem contexto de execução, se algo teria acesso a
algo que esteja na memória desse contexto, essa memória não é apagada
e a referência e o acesso permanecem a quem é devido
*/

function buildFunctions() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        );
    }

    return arr;
}
var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();
for (var i = 0; i < fs.length; i++) {
    fs[i]();
}
for (var index = 0; index < fs.length; index++) {
    fs[index]();
}


console.log('----------------------');

function buildFunctions2() {
    var arr = [];

    for (i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        );
    }

    return arr;
}
var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();
