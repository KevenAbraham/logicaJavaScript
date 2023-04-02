let num1 = parseInt(prompt("Informe o primeiro número:"));
let num2 = parseInt(prompt("Informe o segundo número:"));
let num3 = parseInt(prompt("Informe o terceiro número:"));

if (num1 > num2 && num1 > num3) {
    document.write("<center>O número <b>" + num1 + "</b> é o maior número dentre os demais.</center>");
} else if (num2 > num1 && num2 && num3) {
    document.write("<center>O número <b>" + num2 + "</b> é o maior número dentre os demais.</center>");
} else {
    document.write("<center>O número <b>" + num3 + "</b> é o maior número dentre os demais.</center>");
}