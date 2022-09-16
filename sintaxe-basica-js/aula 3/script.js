// o que são vetores ou arrays

// como declarar uma array
/* let array = ['string', 1, true];
console.log(array); */

// pode guardar vários tipos de valores
/* let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array);
console.log(array[6]); */

// forEach
/* array.forEach(function(item, index){console.log(item, index)}); */

// push - insere um novo item no final do array
/* array.push('novo item');
console.log(array); */

// pop - tira o último item do array
/* array.pop();
console.log(array); */

// shift - tira um item do início do array
/* array.shift();
console.log(array); */ 

// unshift - adiciona um novo item ao início do array
/* array.unshift('novo item no início');
console.log(array); */

// indexOf
/* console.log(array.indexOf(true)); */

// splice - remove ou substitui um item pelo índice
/* array.splice(0, 3);
console.log(array); */

// slice - retorna uma parte de um array existente
/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

// manipulando objetos
let object = {string: 'string', number: 1, boolean: true, array: ["1, 3, 4, 6, 7, 13"], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

// desestruturação: criar variáveis a partir de itens dentro dos objetos
/* var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

// outra forma de desestruturar objetos: botando chaves na declaração da variável.
// se deixar em branco, vai puxar tudo que estiver dentro do objeto.
// pode declarar as propriedades desejadas dentro das chaves.
var {} = object;
console.log(object); */

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
