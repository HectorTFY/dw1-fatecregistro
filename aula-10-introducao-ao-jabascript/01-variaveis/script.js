//Javascript
// VARIÁVEIS
/* Variáveis podem ser declaradas de 3 formas:
VAR, LET e CONST*/
// VAR: no geral, evite o sue uso, pode não ser muito seguro.
// LET: utilize quado for necessário reatribuir o valor de variável.
// CONST: utilize quando NÃO precisar reatribuir o valor da variável.
var nome = "Hector";
nome = "João";
var nome = "José";

// LET
let cidade = "Registro";
cidade = "Sete Barras";
// let cidade = Cajati
// let cidade -> isso não pode, porque já foi utilizado
// CONST
const user = "pedro@email.com";
// user = "pedro@gmail.com" -> isso também não pode, porque não é possível reatribuir o nome da variável.
//const user = "" -> isso também não poderia

// FUNÇÕES DO ELEMENTO WINDOW (navegador)
// Disparando uma janela de alerta no site
window.alert("Bem-vindo aos de Javacript!");
// Disparando uma janela de fonrimação
const confirmacao = window.confirm("Vamos começar?");
if (confirmacao == true) {
  // Dispara uma janela de entrada de dados
  const nome = window.prompt("Qual é o seu nome?");
  const idade = window.prompt("Quantos anos você tem?")
  
  // Escrevendo no site
  document.writeln("Olá " + nome+ "!"); //Concatenação
//   Concatenação = Template Strings
// ao invés de escrever: document.write("Você tem " + idade + "anos"). Escreva:
document.writeln(`Você tem ${idade} anos!`)
  if(idade >=18) {document.writeln("Você é maior de idade!")} else {document.writeln("Você é menor de idade!")}
}

// CRIE UM SITE COM UM SCRIPT QUE PERGUNTE A IDADE DO USUÁRIO. SE A IDADE FOR MAIOR QUE 18, ELE MOSTRA NO SITE: "VOCÊ É MAIOR DE IDADE", SE NÃO ELE MOSTRA: "VOCÊ É MENOR DE IDADE."
// if (idade :=18){

// } else {
    // ...
// }