// if
/* var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
} */

// else
/* var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
} else {
    console.log('Ninguém marcou ponto.');
} */

// else if
/* var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto!');
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto!');
} else {
    console.log('Ninguém marcou ponto.');
} */

// aninhamento de if's - não ficou 100% entendido.
/* var jogador1 = -1;
var jogador2 = 0;
var placar;

if (jogador1 != -1) {                // aqui ela usou um operador símbolo diferente.
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    } else {
        console.log('Ninguém marcou ponto.');
    }
} else {
    console.log('Jogador inválido!');
} */

// if ternário
/* var jogador1 = 0;
var jogador2 = 1;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');  // if ternário de uma linha só.

if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} 

else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
} 

else {
    console.log('Ninguém marcou ponto.');
}

// switch/case - lembro de ter usado isso em Java nas aulas da prof. Alexandra.
switch (placar) {
    case placar = jogador1 > jogador2:  
        console.log('Jogador 1 ganhou.');
    break;   // nunca esquecer de colocar os breakpoints para a instrução não ficar em looping infinito.

    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou.');
    break;

    default:
        console.log('Ninguém ganhou.')
} */

// ESTRUTURAS DE REPETIÇÃO

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'}

// For: executa uma instrução até que ela seja falsa.
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
} */

// For/In: funciona como uma repetição a partir de uma propriedade.
/* var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
for (i in array) {
    console.log(i);
} */ //exemplo do slide

/* for (let i in array) {
    console.log(i);
} */

// For/In com Object
/* for (i in object) {
    console.log(i);
}

// For/Of: Funciona como uma repetição a partir de um valor.
for (i of array) {
    console.log(i);
}

// For/Of com object - não funciona com objetos, mas caso queira tem que especificar a propriedade, 
// e vai imprimir cada caracter do valor em linhas separadas.
for (i of object.propriedade1) {
    console.log(i);
} */

// While: Executa uma instrução enquanto determinada condição for verdadeira, a verificação é feita *antes* da execução.
// exemplo do slide:
/* var a = 0;

while (a < 10) {
    a++;
    console.log(a);
} */

// Do/While: Executa uma instrução até que determinada condição seja falsa, a verficação é feita *depois* da execução.
// exemplo do slide:

var a = 0;

do {
    a++;
    console.log(a);
} while (a < 10);
