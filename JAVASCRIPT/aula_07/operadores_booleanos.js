// Operadorores Booleanos: Comparações
const prompt = require("readline-sync");

//*COMPARAÇÃO

const numero1 = prompt.question("Qual seu primeiro valor1? ");
const numero2 = prompt.question("Qual seu primeiro valor2? ");

if (numero1 == numero2) {
  console.log("Mesmo Valor");
} else {
  console.log("Diferentes");
}

//! VERIFICANDO DIFERENÇA E COMPARAÇÃO

console.log(numero1 !== numero2);

//*UTILIZANDO "<" menor que

if (numero1 < numero2) {
  console.log(`o número ${numero1} é menor que o número ${numero2}`);
} else {
  console.log(`o número ${numero2} é menor que o número ${numero1}`);
}
//*UTILIZANDO "<=" menor ou igual

if (numero1 <= numero2) {
  console.log(`o número ${numero1} é menor ou igual que o número ${numero2}`);
} else {
  console.log(`o número ${numero2} é menor que o número ${numero1}`);
}
//*UTILIZANDO ">" Maior que

if (numero1 > numero2) {
  console.log(`o número ${numero1} é maior que o número ${numero2}`);
} else {
  console.log(`o número ${numero2} é Maior que o número ${numero1}`);
}
//*UTILIZANDO ">=" Maior ou igual

if (numero1 > numero2) {
  console.log(`o número ${numero1} é maior  ou igual ao número ${numero2}`);
} else {
  console.log(`o número ${numero2} é maior que o número ${numero1}`);
}

//TODO: CONJUNÇÕES LÓGICAS

const idadePessoa1 = prompt.question("Qual sua idade? ");
const idadePessoa2 = prompt.question("Qual sua idade? ");

//! || funcionando como um (a primeira pessoa é maior de idade OU , OR a segunda pessoa...)
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18);

//! && funcionando como um AND (a primeira pessoa é maior de idade AND a segunda pessoa...)
console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18);

//* INVERTENDENDO

console.log(!(idadePessoa1 >= 18));
