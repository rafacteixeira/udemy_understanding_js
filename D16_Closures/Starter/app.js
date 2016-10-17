function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}


greet('Hi')('Rafael');


var sayHi = greet('Hello');
sayHi('Rafael');


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
