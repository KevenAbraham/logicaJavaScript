let morango = parseFloat(prompt("Informe quantos Kgs deseja de Morango:"));
let maca = parseFloat(prompt("Informe quantos Kgs deseja de Maçã:"));

if (morango <= 5) {
    valorMorango = morango * 2.50;
} else {
    valorMorango = morango * 2.20;
}

if (maca <= 5) {
    valorMaca = maca * 1.80;
} else {
    valorMaca = maca * 1.50;
}

kgTotal = morango + maca;
valorTotal = valorMaca + valorMorango;

if (kgTotal >= 8 || valorTotal >= 25) {
    valorTotal = valorTotal - (valorTotal * (0.10));
} 

document.write(`<center>O valor a ser pago é <b>R$${valorTotal.toFixed(2)}`);