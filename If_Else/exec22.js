let combustivel = prompt("Informe o tipo de combustível a ser abastecido: [G - Gasolina / A - Álcool]").toUpperCase();
let litros = parseFloat(prompt("Informe a quantidade de litros que foi abastecido: "));

if (combustivel == "G") {
    valorTotal = litros * 2.50;
    document.write(`<center>Valor total: <b>R$${valorTotal.toFixed(2)}</b>`);
    if (litros <= 20) {
        valorTotal = valorTotal - (valorTotal * 0.04);
    } else {
        valorTotal = valorTotal - (valorTotal * 0.06);
    }
    document.write("<center>O valor total a se pagar com os descontos por " + litros + "L de gasolina é <b>R$" + valorTotal.toFixed(2));
} else if (combustivel == "A") {
    valorTotal = litros * 1.90;
    document.write(`<center>Valor total: <b>R$${valorTotal.toFixed(2)}</b>`);
    if (litros <= 20) {
        valorTotal = valorTotal - (valorTotal * 0.03);
    } else {
        valorTotal = valorTotal - (valorTotal * 0.05);
    }
    document.write(`<center>Valor total a se pagar com os descontos por ${litros}L de gasolina é <b>R$${valorTotal.toFixed(2)}`);
}