const vagas = [];

function listagemDeVagas() {
  const vagasTexto = vagas.reduce(function (textoFinalizado, vaga, index) {
    textoFinalizado += index + ". ";
    textoFinalizado += vaga.nome;
    textoFinalizado +=
      " (" + vaga.candidatos.length + " candidatos inscritos na vaga)\n";
  }, "");

  alert(vagasTexto);
}

function novaVaga() {
  const nomeVaga = prompt("Por favor, informe qual o nome destinado à vaga.");

  const descricaoVaga = prompt("Agora, informe uma descrição para a vaga.");

  const dataFinal = prompt(
    "Por último, informe qual a data limite para inscrições na vaga, utilizando o sistema: dd/mm/aaaa."
  );

  const confirma = confirm(
    "Deseja criar essa vaga:\n" +
      " Nome: " +
      nomeVaga +
      "\nDescrição: " +
      descricaoVaga +
      "\nData limite: " +
      dataFinal +
      " ?" +
      "\nOk p/SIM, e Cancelar p/ Não"
  );

  if (confirma === true) {
    const novaVaga = { nomeVaga, descricaoVaga, dataFinal, candidatos: [] };
    vagas.push(novaVaga);
  }
}

function visualizarVaga() {
  const index = prompt(
    "Por favor, informe o índice da vaga que se deseja visualizar."
  );
  const vaga = vagas[index];

  const candidatosTexto = vagas.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga " +
      index +
      "\nNome: " +
      vaga.nomeVaga +
      "\nDescrição: " +
      vaga.descricaoVaga +
      "\nData Limite: " +
      vaga.dataFinal +
      "\nCandidatos inscritos: " +
      candidatosTexto
  );
}

function inscreverCandidato() {
  const candidato = prompt("Por favor, insira o nome do candidato a seguir.");

  const index = prompt(
    "Agora, insira o índice da vaga a qual deseja adicioná-lo."
  );

  const vaga = vagas[index];

  const confirma = confirm(
    "Deseja cadastrar o candidato " +
      candidato +
      " na vaga " +
      vaga +
      "?\n Ok p/ Sim, Cancelar p/ Não"
  );

  if (confirma === true) {
    vaga.candidatos.push(candidato);
  }
}

function excluirVaga() {
  const index = prompt(
    "Por favor, informe o índice da vaga que se deseja excluir."
  );

  const vaga = vagas[index];

  const confirm = confir(
    "Tem certeza que deseja excluir" + vaga + "?\nOk p/ Sim, cancelar p/ Não"
  );

  if (confirm === true) {
    vagas.splice(index, 1);
    alert("Vaga excluída!");
  }
}

do {
  escolha = prompt(
    "Olá, seja bem vindo ao Vagas 2000!\nMenu: \n1) Listar vagas disponíveis\n2) Criar uma nova vaga\n3) Visualizar uma das vagas\n4) Inscrever um candidato em uma vaga\n5) Excluir uma vaga\n6) Sair"
  );

  switch (escolha) {
    case "1":
      listagemDeVagas();
      break;

    case "2":
      novaVaga();
      break;

    case "3":
      visualizarVaga();
      break;

    case "4":
      inscreverCandidato();
      break;

    case "5":
      excluirVaga();
      break;

    case "6":
      alert("Obrigado por utilizar nosso sistema!");
      break;

    default:
      alert("Por favor, selecione uma das opcões disponíveis!");
  }
} while (escolha != "6");
