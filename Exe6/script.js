//Primeira Parte

let valor = prompt("Digite o valor que se deseja saber a tabuada até 20:");
valor = parseFloat(valor);
let tabuada = "";

for (let index = 1; index <= 20; index++) {
  tabuada = tabuada + ", " + valor * index;
}
alert("A tabuada do " + valor + " é:\n" + tabuada);

////////////////////////////////////////////////////////////////////
//Segunda Parte
let palavra = prompt(
  "Escreva a palavra a qual se deseja saber se é um palíndromo:"
);
let palavraInvertida = "";

for (let index = 0; index < palavra.length; index++) {
  palavraInvertida = palavra[index] + palavraInvertida;
}

if (palavraInvertida == palavra) {
  alert(palavra + " é um palíndromo!");
} else {
  alert(
    "A palavra escolhida não é um palíndromo :(\nPalavra normal: " +
      palavra +
      "\nPalavra invertida: " +
      palavraInvertida
  );
}
