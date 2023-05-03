let pi = 3.14;

function areaTriangulo() {
  let base = prompt("Digite primeiro o valor da base do triângulo:");
  let altura = prompt("Agora, digite o valor da altura do triângulo:");
  return (base * altura) / 2;
}

function areaRetangulo() {
  let base = prompt("Digite primeiro o valor da base do retângulo:");
  let altura = prompt("Agora, digite o valor da altura do retÂngulo:");
  return base * altura;
}

function areaQuadrada() {
  let lado = prompt("Agora, digite o valor do lado do quadrado:");
  return lado ** 2;
}

function areaTrapezio() {
  let baseMa = parseFloat(
    prompt("Digite primeiro o valor da base maior do trapézio:")
  );
  let baseMe = parseFloat(prompt("Agora, o valor da base menor do trapézio:"));
  let altura = prompt("Por último, digite o valor da altura do retângulo:");
  return ((baseMa + baseMe) * altura) / 2;
}

function areaCirculo() {
  let raio = prompt("Digite o valor do raio do círculo:");
  return raio ** 2 * pi;
}

function exibirMenu() {
  return prompt(
    "Bem vindx à Calculadora Geométrica\nSelecione qual operação deseja realizar:\n1) Calcular a área de um triângulo\n2) Calcular a área de um Retângulo\n3) Calcular a área de um Quadrado\n4) Calcular a área de um Trapézio\n5) Calcular a área de um Círculo\n6) Sair"
  );
}

function executarPrograma() {
  let menu = "";

  do {
    menu = exibirMenu();
    let resultado = null;

    switch (menu) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrada();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Finalizando a calculadora...");
        break;

      default:
        alert("Escolha uma das opções disponíveis acima!");
    }

    if (resultado) {
      alert("O resultado da operação escolhida foi: " + resultado);
    }
  } while (escolha !== "6");
}

executarPrograma();
