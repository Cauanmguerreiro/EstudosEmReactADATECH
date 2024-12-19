const nome = "Cauan";
const idade = 21;
const altura = 1.8;
const estudando = true;

console.log(`${nome} tem ${idade} anos, ele tem ${altura} de altura`)
    if (estudando == true)
        console.log("estudante")
    else(
        console.log("vagabundo"))

// ! NÃU UTILIZAR VAR

//* UTILIZAR LET or CONST

//*let: é uma variavel mutavel
//*const: é uma variavel imutavel

let notaDoAluno = 20;
const mediaDoAluno = 8;

notaDoAluno = 9;

//! NÃO É PERMITIDO MUDANÇA DE VARIVEL CONSTANTE
//! mediaDoAluno = 5;

console.log(notaDoAluno)


//! console.log(mediaDoAluno) //!TypeError: Assignment to constant variable. 
