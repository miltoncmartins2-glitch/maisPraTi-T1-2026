// Programa de classificação etária

let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoAtual = new Date().getFullYear();

let idade = anoAtual - anoNascimento;

console.log("Idade:", idade);

if (idade <= 12) {
    console.log("Classificação: Criança");
} else if (idade >= 13 && idade <= 17) {
    console.log("Classificação: Adolescente");
} else if (idade >= 18 && idade <= 59) {
    console.log("Classificação: Adulta");
} else {
    console.log();
}