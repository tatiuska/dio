/*var preco = 2;
var desconto = 0.2;

preco = preco - desconto;

var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto;*/

/*function soma(a, b) {  
    return a + b;
}                       //só isso aqui não faz nada, tem que chamar a função

soma(3, 5); //chamando a função */

//console.log('olá, mundo!');

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são:', evenNums);
}

let array = [1, 2, 4, 5, 7, 8];

returnEvenValues(array);
