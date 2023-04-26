let nome = window.prompt("Qual seu nome?");
let resposta = window.confirm(
  "Você já visitou alguma cidade? \nOK para sim/Cancelar para Não"
);
let resposta2 = null; //resposta acerca de qual a cidade
let cidades = ""; //variável onde ficarão guardadas as infos que serão dadas ao final do programa
let contagem = 0; //contagem de quantas cidades foram escritas pelo usuário
//continuar = resposta sobre ter visitado alguma outra cidade

if (resposta === true) {
  let continuar = true;
  while (continuar === true) {
    resposta2 = window.prompt("Qual cidade você já visitou?");
    cidades = resposta2 + ", " + cidades;
    contagem += 1;
    continuar = window.confirm(
      "Já visitou alguma outra cidade?\nOK para sim/Cancelar para Não"
    );
  }
} else {
  window.alert("Obrigado" + nome + "por responder!");
  cidades = "Nenhuma :(";
}

window.alert(
  "Muito obrigado por responder " +
    nome +
    "\nAs cidades que você visitou foram:\n" +
    cidades +
    "totalizando um total de: " +
    contagem
);
