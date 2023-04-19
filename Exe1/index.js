/*let primeiroNome = null;
let sobrenome = null;
let campo = null;
let anoNascimento = null;
let idade = null;

primeiroNome = window.prompt("Digite seu primeiro nome?");
sobrenome = window.prompt("Digite seu sobrenome?");
campo = window.prompt("Qual seu campo de estudo?");
anoNascimento = window.prompt("Em que ano você nasceu?");
idade = 2023 - anoNascimento;
*/
let DECIMAL = 10;

let primeiroNome = window.prompt("Digite seu primeiro nome?");
let sobrenome = window.prompt("Digite seu sobrenome?");
let campo = window.prompt("Qual seu campo de estudo?");
let anoNascimento = window.prompt("Em que ano você nasceu?");
anoNascimento = parseInt(anoNascimento, DECIMAL);

let idade = 2023 - anoNascimento;

console.log(primeiroNome + " " + sobrenome, campo, idade);
///////////////////////////////////////////////////////////
/*let numUm = null;
let numDois = null;
let soma = null;
let subt = null;
let mult = null;
let divi = null;
let DECIMAL = 10;

numUm = window.prompt("Digite o primeiro valor numérico");
numDois = window.prompt("Digite o segundo valor numérico");

numUm = parseInt(numUm, DECIMAL);
numDois = parseInt(numDois, DECIMAL);

soma = numUm + numDois;
subt = numUm - numDois;
mult = numUm * numDois;
divi = numUm / numDois;*/

let numUm = window.prompt("Digite o primeiro valor numérico");
let numDois = window.prompt("Digite o segundo valor numérico");
numUm = parseInt(numUm, DECIMAL);
numDois = parseInt(numDois, DECIMAL);

let soma = numUm + numDois;
let subt = numUm - numDois;
let mult = numUm * numDois;
let divi = numUm / numDois;

console.log(soma, subt, mult, divi);
