const prompt = require('readline-sync');

const idade = prompt.question("Qual eh sua idade? ");

//* Coerção Explícita
const idadeNumero = Number(idade)

console.log(idade, typeof idade);
console.log(idadeNumero, typeof idadeNumero);


//* Coerção Implícita

console.log(1 + "1")

console.log(10 - "5")

console.log(10* "5")

console.log(10/ "5")