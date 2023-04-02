let num1 = parseInt(prompt("Informe o primeiro valor:"));
let num2 = parseInt(prompt("Informe o segundo valor:"));
let num3 = parseInt(prompt("Informe o terceiro valor:"));

let maior, menor, meio = 0

if (num1 > num2 && num1 > num3 ) {
    if (num2 > num3) {
        meio = num2;
        menor = num3;
    } else {
        meio = num3;
        menor = num2;
    }
    maior = num1;
} else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        meio = num1;
        menor = num3;
    } else {
        meio = num3;
        menor = num1;
    }
    maior = num2;
} else if (num3 > num1 && num3 > num1) {
    if (num1 > num2) {
        meio = num1;
        menor = num2;
    } else { 
        meio = num2;
        menor = num1;
    }
    maior = num3;
}

document.write("<center>Os números em ordem decrescente são: <br>" + maior + "<br>" + meio + "<br>" + menor);