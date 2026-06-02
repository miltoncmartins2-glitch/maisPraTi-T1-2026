
console.log("========== 1. CRIANDO ARRAYS ==========\n")

// ----- 1.1: Array com colchetes (forma mais comum) -----
// Os valores ficam entre colchetes [], separados por vírgula.
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Pêra"]
console.log("Array de frutas:", frutas)

// ----- 1.2: Array de números -----
let numeros = [10, 20, 30, 40, 50]
console.log("Array de números:", numeros)

// ----- 1.3: Array vazio (será preenchido depois) -----
// Muito comum quando não sabemos os valores no início do programa.
let listaVazia = []
console.log("Array vazio:", listaVazia)

// ----- 1.4: Array misto (diferentes tipos de dados) -----
// JavaScript permite misturar tipos, mas na prática evitamos isso
// para manter o código organizado e previsível.
let misto = ["João", 25, true, 1.75]
console.log("Array misto:", misto)

// ----- 1.5: Array de objetos (muito usado no mundo real) -----
// Cada elemento é um objeto com várias propriedades.
// Este é o padrão mais encontrado em aplicações reais.
let alunos = [
    { nome: "Ana",    nota: 9.5 },
    { nome: "Carlos", nota: 7.0 },
    { nome: "Beatriz",nota: 8.5 }
]
console.log("Array de objetos:", alunos)/// =====================================================================

 2./*ACESSANDO ELEMENTOS*/
// =====================================================================

console.log("\n\n========== 2. ACESSANDO ELEMENTOS ==========\n")

let cores = ["Vermelho", "Verde", "Azul", "Amarelo", "Roxo"]

// O índice SEMPRE começa em 0, não em 1!
// Posição: 0=Vermelho, 1=Verde, 2=Azul, 3=Amarelo, 4=Roxo

// ----- 2.1: Acessando pelo índice -----
console.log("Primeira cor (índice 0):", cores[0])    // Vermelho
console.log("Terceira cor (índice 2):", cores[2])    // Azul
console.log("Última cor (índice 4):",  cores[4])     // Roxo

// ----- 2.2: Acessando o último elemento de forma dinâmica -----
// Se não soubermos o tamanho do array, usamos .length - 1 para o último.
// .length retorna 5 (quantidade de elementos), mas o último índice é 4.
// Por isso subtraímos 1: length - 1 = índice do último elemento.
console.log("\nTamanho do array:", cores.length)
console.log("Último elemento (dinâmico):", cores[cores.length - 1])  // Roxo

// ----- 2.3: Acessando elemento que não existe -----
// Se tentar acessar um índice fora do array, retorna undefined (não dá erro).
console.log("Índice inexistente (10):", cores[10])   // undefined

// ----- 2.4: Modificando um elemento -----
// Basta referenciar o índice e atribuir um novo valor com =
console.log("\nAntes da modificação:", cores[1])      // Verde
cores[1] = "Verde Escuro"
console.log("Depois da modificação:", cores[1])       // Verde Escuro

// ----- 2.5: Acessando propriedades em array de objetos -----
// Usamos array[índice].propriedade para acessar dados dentro de objetos.
console.log("\nNome do primeiro aluno:", alunos[0].nome)   // Ana
//  console.log("Nota do segundo aluno:",  alunos[1].nota)    // 7.0


