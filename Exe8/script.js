const imoveis = [];
let escolha = null;
let cadastrados = imoveis.length;
let nomeProp = "";
let quartos = null;
let banheiros = null;
let garagem = null;

do {
  escolha = prompt(
    "Bem vindo ao Cadastrador de imóveis\n" +
      "Atualmente possuímos: " +
      cadastrados +
      " imóveis cadastrados!" +
      "\nPor favor, selecione uma das opções abaixo:\n1) Cadastrar um imóvel\n2) Visualizar imóveis cadastrados\n3) Sair"
  );

  switch (escolha) {
    case 1:
      nomeProp = prompt(
        "Para cadastrar um imóvel, por favor, coloque seu nome"
      );
      quartos = prompt("Agora coloque quantos quartos o imóvel possui");
      banheiros = prompt("Agora, quantos banheiros");
      garagem = confirm(
        "Por último, nos informe por favor, o imóvel possui garagem?\nOK para sim/Cancelar para Não"
      );
    case 2:

    case 3:
      break;
    default:
      alert("Por favor, escolha uma das opções disponíveis!");
  }
} while (escolha !== 3);
