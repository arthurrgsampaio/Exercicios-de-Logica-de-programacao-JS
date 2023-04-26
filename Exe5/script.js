//Primeira Parte

let option = "";
let encerrar = null;

do {
  encerrar = false;
  option = prompt(
    "Olá, seja bem vindo!\nEscolha uma das opções para prosseguirmos:\n\n1) Opção1\n2) Opção2\n3) Opção3\n4) Opção4\n5)Encerrar"
  );
  if (option != 5 && option >= 1 && option < 5) {
    alert("Você selecionou a opção: " + option);
  } else if (option == 5) {
    alert("Você selecionou a opção: " + option + ", encerrando...");
    encerrar = true;
  } else {
    alert("Por favor, escolha uma das opções disponíveis");
  }
} while (encerrar === false);
///////////////////////////////////////////////////////////////////////
//Segunda Parte

let quantity = prompt("Olá, qual seria a quantia inicial?");
quantity = parseFloat(quantity);
let continuar = null;
let chose = "";
let soma = null;
let saque = null;

do {
  continuar = true;
  chose = prompt(
    "O que deseja fazer?\n\n1) Adicionar dinheiro\n2) Retirar dinheiro\n3) Sair"
  );
  if (chose == 1) {
    soma = prompt("Quanto deseja somar a quantia inicial?");
    soma = parseFloat(soma);
    quantity = quantity + soma;
  } else if (chose == 2) {
    saque = prompt("Quanto deseja retirar da quantia inicial?");
    quantity = quantity - saque;
  } else if (chose == 3) {
    alert("Saindo...");
    continuar = false;
  } else {
    alert("Escolha uma das opções disponíveis!");
  }
} while (continuar === true);

alert("A quantia final ficou em: " + quantity);
