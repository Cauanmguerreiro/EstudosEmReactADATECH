const prompt = require("readline-sync");

//UTILIZAR NUMBER PARA JA DEFINIR O TYPE DA VARIAVEL
const idade = Number(prompt.question("Qual a sua idade? "));

// const ehMaiorDeIdade = idade >= 18;

//Condicional: If / Else

if (idade >= 18) {
  console.log("Voce e maior de idade");
} else {
  console.log("voce e menor de idade");
}

const nota1 = Number(prompt.question("Qual a nota?"));
const nota2 = Number(prompt.question("Qual a nota?"));
const nota3 = Number(prompt.question("Qual a nota?"));
const nota4 = Number(prompt.question("Qual a nota?"));
const nota5 = Number(prompt.question("Qual a nota?"));

const mediaDoAluno = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;



if (mediaDoAluno >= 7) {
  console.log("Aprovado");
} else if (mediaDoAluno >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
//! EXEMPLOS COM CNH

//! 1)
const nomeHabilitado = Number(prompt.question("Qual seu nome? "));
const idadeDirigir = Number(prompt.question("Qual sua idade? "));
const cnh = prompt.question("Tem cnh? ");

const idadeParaDirigir = 18; // Variável para idade mínima para dirigir

if (idadeDirigir >= idadeParaDirigir && cnh === "sim") {
  console.log(`${nomeHabilitado}, você está habilitado para dirigir.`);
} else {
  console.log(`${nomeHabilitado}, MULTADO CANALHA!`);
}



//! 2)


const idadeHabilitado = Number(prompt.question("qual o seu nome? "));
const temCNH = true;

if (idadeHabilitado >= 18 && temCNH == true) {
  console.log("VOce pode dirigir");
} else{
    console.log("TA DE SACANAGEM MALANDRO?")
}
