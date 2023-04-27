//Primeira Parte
const pacientes = [
  "Pedro",
  "Lucas",
  "Gabriela",
  "Lívia",
  "Gabriel",
  "Arthur",
  "Rafel",
  "Luísa",
  "Henrique",
  "Leandro",
  "Cecília",
  "Alberto",
  "Giovana",
  "Letícia",
];

let menu = null;
let nomeNovo = "";
let nomeConsulta = "";
let posicao = null;
let encerrar = false;
let posicaoConsulta;

alert("Olá, seja bem vindo ao consultório 2000!");

do {
  menu = prompt(
    "Esse é nosso menu!\nPor favor, escolha uma das opções a seguir:\n1) Novo paciente\n2) Consultar Paciente\n3) Sair"
  );
  if (menu == 1) {
    nomeNovo = prompt(
      "Por favor, insira seu nome para que possamos te adicionar na lista de espera:"
    );
    pacientes.push(nomeNovo);
    alert("Você está agora na posição " + pacientes.length);
  } else if (menu == 2) {
    nomeConsulta = prompt(
      "Por favor, insira o nome do paciente o qual se deseja saber a posição:"
    );
    posicaoConsulta = pacientes.indexOf(nomeConsulta) + 1;
    prompt(nomeConsulta + " está na posição " + posicaoConsulta);
  } else if (menu == 3) {
    alert("Obrigado por utilizar nossos serviços!");
    alert("Finalizando programa...");
    encerrar = true;
  } else {
    alert("Por favor, selecione uma das opções disponíveis!");
  }
} while (encerrar === false);
/////////////////////////////////////////////////////////
//Segunda Parte

const baralho = [
  "ás-ouros",
  "2-ouros",
  "3-ouros",
  "4-ouros",
  "5-ouros",
  "6-ouros",
  "7-ouros",
  "8-ouros",
  "9-ouros",
  "10-ouros",
  "valete-ouros",
  "dama-ouros",
  "rei-ouros",
  "ás-copas",
  "2-copas",
  "3-copas",
  "4-copas",
  "5-copas",
  "6-copas",
  "7-copas",
  "8-copas",
  "9-copas",
  "10-copas",
  "valete-copas",
  "dama-copas",
  "rei-copas",
  "ás-paus",
  "2-paus",
  "3-paus",
  "4-paus",
  "5-paus",
  "6-paus",
  "7-paus",
  "8-paus",
  "9-paus",
  "10-paus",
  "valete-paus",
  "dama-paus",
  "rei-paus",
  "ás-espadilha",
  "2-espadilha",
  "3-espadilha",
  "4-espadilha",
  "5-espadilha",
  "6-espadilha",
  "7-espadilha",
  "8-espadilha",
  "9-espadilha",
  "10-espadilha",
  "valete-espadilha",
  "dama-espadilha",
  "rei-espadilha",
];

let continuar = true;
let escolha = null;
let cartaNova = "";
let cartaRetirada = "";

do {
  escolha = prompt(
    "Bem vindo à pilha de cartas!\nPor favor, escolha uma das opções três opções a seguir:\n1) Adicionar uma carta\n2) Retirar uma carta\n3) Sair\n\nO número total de cartas no baralhoa tualmente é de: " +
      baralho.length +
      "."
  );
  if (escolha == 1) {
    cartaNova = prompt(
      "Por favor, insira a carta a qual se deseja adicionar no baralho no padrão: ás-nipe ou 2-nipe"
    );
    baralho.push(cartaNova);
  } else if (escolha == 2) {
    cartaRetirada = baralho.pop();
    alert("A carta retirada da pilha foi: " + cartaRetirada);
  } else if (escolha == 3) {
    alert("Obrigado por utilizar nossos baralho!");
    alert("Finalizando programa...");
    continuar = false;
  } else {
    alert("Por favor, selecione uma das opções disponíveis!");
  }
} while (continuar === true);
