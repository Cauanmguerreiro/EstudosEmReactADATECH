// MUITO ÚTIL QUANDO SUA VARÁVEL POSSUI VALORES ESPECIFICOS

const permissoes = "aluno"; //'aluno' | 'professor' | 'admin'

switch (permissoes) {
  case "aluno":
    console.log("Você só pode visualizar as aulas");
    break;
  case "professor":
    console.log("Você pode editar as aulas");
    break;
  case "admin":
    console.log("Você tem acesso total");
    break;
  default:
    console.log("Permissão desconhecida");
}
