//Primeira Parte

let nomeUm = prompt("Qual o nome do primeiro carro?");
let veloUm = prompt("Qual a velovcidade dele?");
let nomeDois = prompt("Qual o nome do segundo carro?");
let veloDois = prompt("Qual o velocidade dele?");

if (veloUm > veloDois) {
  alert("O " + nomeUm + " é o mais rápido!");
} else if (veloUm == veloDois) {
  alert("Ambos possuem a mesam velocidade!");
} else {
  alert("O " + nomeDois + " é o mais rápido!");
}
///////////////////////////////////////////////////////////////
//Segunda Parte

let name1 = prompt("Qual o nome do atacante?");
let attackPwr = prompt("Qual seu poder de ataque?");

let name2 = prompt("Qual o nome do defensor?");
let lifeCounter = prompt("Quantos pontos de vida ele possui?");
let defense = prompt("Qual seu poder de defesa?");
let shield = confirm("Ele possui escudo?"); //usei o confirm para não depender de como o usuário responderia à pergunta

attackPwr = parseFloat(attackPwr);
lifeCounter = parseFloat(lifeCounter);
defense = parseFloat(defense);

let damage = attackPwr - defense;

if (attackPwr > defense && shield === false) {
  lifeCounter = lifeCounter - damage;
  window.alert(
    "O dano causado ao " +
      name2 +
      " foi de: " +
      damage +
      "\n\nA vida restante dele é de: " +
      lifeCounter
  );
} else if (attackPwr > defense && shield === true) {
  lifeCounter = lifeCounter - damage / 2;
  window.alert(
    "O dano causado ao " +
      name2 +
      " foi de: " +
      damage +
      "\n\nA vida restante dele é de: " +
      lifeCounter
  );
} else if (attackPwr >= defense) {
  alert(
    name2 +
      " não sofreu danos nessa rodada" +
      "\na vida atual segue: " +
      lifeCounter
  );
}
