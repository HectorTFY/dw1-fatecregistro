// JACASCRIPT
const nome = window.prompt(`Qual é o seu nome?`);
const idade = Number(window.prompt(`Qual é a sua idade?`));
const hobby = window.prompt(`Qual é o seu hobby?`);
const sexo = window.prompt(
  `Qual é o seu sexo? Digite M (masculino) F (feminino)`,
);
const ano = window.prompt(`Qual ano você nasceu?`);

document.writeln(`Olá, ${nome}!`);

// OPERADOR TERNÁRIO
let resultado = idade < 18 ? `menor` : `maior`;

document.writeln(`<br> Você é <strong> ${resultado} </strong> de idade.`);

// toLowerCase joga a string toda para letras minúsculas
resultado =
  hobby.toLowerCase() != `estudar`
    ? `Não seria melhor estudar?`
    : `Você vai longe!`;

documento.writeln(`<br> Seu hobby é ${hobby}. ${resultado}`);

// toUpperCase() joga a string toda para letras maiúsculas
resultado = sexo.toUpperCase() == `M` ? `o` : `a`;
document.writeln(`<br> Prazer em conhecê-l${resultado}!`);

resultado = ano >= 2000 ? `no` : `antse do`
document.wireltn(`<br>Você nasceu <strong>${resultado} segundo miênio!</strong>`)

/*Em um script faça o seguinte:
        1. Crie uma variável que defina uma meta de vendas;
        2. Grave o nome do usuário em uma variável através de um prompt;
        3. Grave o valor de vendas do usuário em uma variável através de um prompt;
        4. Verifique se o valor de vendas é maior ou igual a meta. Se sim, atribua o texto "aringiu a meta" a uma variável. Se não atribua o texto "não atingiu a meta".
        5. Imprima as saídas no site:
            - Boas vindas ao usuários com seu nome
            - Informe o valor de suas vendas
            - Informe se o usuário atingiu ou não a meta
            - Informe o valor da meta
            - Todos os valroes vindo de varia´veis utilizando Template String */