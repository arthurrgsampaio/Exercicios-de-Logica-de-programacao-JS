let valor = prompt("Digite qual valor, em metro, que se deseja converter.");

let valorNum = parseFloat(valor);

let conversor = prompt(
  'Agora, escolha para qual medida se deseja alterar:\n1) Milímetro (mm)\n2) Centímetro (cm)\n3) Decímetro (dm)\n4) Decâmetro (dam)\n5) Hectômetro (hm)\n6) Quilômetro (km)"'
);

let conversorNum = parseFloat(conversor);

switch (conversorNum) {
  case 1:
    alert(valorNum + " m" + " = " + valorNum * 1000 + "mm");
    break;

  case 2:
    alert(valorNum + " m" + " = " + valorNum * 100 + " cm");
    break;

  case 3:
    alert(valorNum + " m" + " = " + valorNum * 10 + " dm");
    break;

  case 4:
    alert(valorNum + " m" + " = " + valorNum / 10 + " dam");
    break;

  case 5:
    alert(valorNum + " m" + " = " + valorNum / 100 + " hm");
    break;

  case 6:
    alert(valorNum + " m" + " = " + valorNum / 1000 + " km");
    break;

  default:
    alert(
      "Opção inválida, por favor, selecione um dos números solicitados anteriormente!"
    );
}
