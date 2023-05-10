let num1 = parseInt(prompt("Informe o primeiro valor"));
let num2 = parseInt(prompt("Informe o segundo valor"));

maior = 0;
menor = 0;

if (num1 > num2) {
    maior = num1;
    menor = num2;
} else {
    maior = num2;
    menor = num1;
}

for(menor; menor <= maior; menor++) {
    document.write("<center>" + menor);
}