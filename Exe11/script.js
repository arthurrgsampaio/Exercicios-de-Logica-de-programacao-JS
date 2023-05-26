function escalar() {
  const escalacaoSection = document.getElementById("escalacao");

  const nameVal = document.getElementById("nome").value;
  const posVal = document.getElementById("posicao").value;
  const numVal = document.getElementById("numero").value;

  const playerItem = document.createElement("li");
  playerItem.id = "jogador - " + numVal;
  playerItem.innerText = posVal + ": " + nameVal + " (" + numVal + ")";

  escalacaoSection.append(playerItem);

  document.getElementById("nome").value = "";
  document.getElementById("posicao").value = "";
  document.getElementById("numero").value = "";
}

function remover() {
  const numSelector = document.getElementById("numRemover").value;
  const removePlayer = document.getElementById("jogador - " + numSelector);

  document.getElementById("escalacao").removeChild(removePlayer);
  document.getElementById("numRemover").value = "";
}
