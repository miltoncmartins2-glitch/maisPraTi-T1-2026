/* Escerva um algoritimo  para ler em graus celcius, Calcular e escrever o  valor correspondente em graus fahrenheit.*/

const PROMPT = require("prompt-sync")();

let celcius = Number(
  prompt(`Informe a temperatura que deseja converter em Fahrenheit:`),
);
if (celcius < -273.15) {
  console.error("Temperatura abaixo do zero absoluto!");
}

let fahrenheit = ((celcius * 9) / 5) * 32;

console.log("O resultado em  fahrenheit é: " + fahrenheit);
/*Ecreva um algoritimo para ler o numero de eleitores de um municipio, o numero de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relção ao total de eleitores. */
let  totalEleitores = Number(PROMPT('Informe o número total de eleitores do municipio:'))
let votosBranco = Number(prompt('Informe número total de votosbranco:'))
let votosNulos = Number(prompt('Informe o número de votos nulos:'))
let votosVálidos = Number(prompt('Informe o numero de votos Vàlidos:'))

let totalVotos = votosBranco + votosNulos + votosVálidos
let abstencoes = totalEleitores - totalVotos

let percentualBrancos = (votosBranco/ totalEleitores) * 100
let percentualNulos =  (votosNulos /totalEleitores) * 100
let percentualValidos = (votosVálidos / totalEleitores) * 10
let percentualAbstencoes * (abstencoes / totalEleitores) * 100



