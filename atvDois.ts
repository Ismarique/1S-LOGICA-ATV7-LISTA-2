// 2 – (se fez a 9 dá lista anterior conforme esse, pula essa) Para doar sangue é necessário ter
// entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma
// pessoa e seu peso e diga se ela pode doar sangue ou não, e diga o motivo da negativa (menor
// de 17 anos; maior que 67 anos, maior que 67 anos e peso inferior; menor de 17 anos e peso
// inferior)
const teclado = require(`prompt-sync`)();
let idade: number = parseInt(teclado("Digite a sua idade: "));
let peso: number = parseFloat(teclado("Digite o seu peso: "));

if (idade >= 18 && idade <= 67 && peso >= 60) {
    console.log("Você pode doar sangue");
}
else if (idade < 18 && peso < 60) {
    console.log("Você não pode doar sangue");
}
else if (idade < 18 && peso >= 60) {
    console.log("Você não tem idade suficiente para doar sangue");
}
else if (idade > 67 && peso >= 60) {
    console.log("Você ultrapasou a idade máxima para doar sangue");
}
else if (idade >= 18 && peso < 60) {
    console.log("Você não tem peso suficiente");
}
else {
    console.log("ocorreu um erro");
}