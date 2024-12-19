//*OPERADOR TERNÁRIO

const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual a sua idade? "));

// idade >= 18 ? console.log("Maior de idade") : console.log("menor de idade");

const mensagem = idade >= 18 ? 'Maior de idade': "Menor de idade;"

console.log(mensagem)