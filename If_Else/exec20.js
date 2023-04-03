let num1 = parseFloat(prompt("Informe o primeiro valor:"));
let num2 = parseFloat(prompt("Informe o segundo valor:"));

let op = prompt("Informe qual operação você gostaria de realizar:\n[+] Adição\n[-] Subtração\n[*] Multiplicação\n[/] Divisão");

switch(op) {
    case "+":
        mais = Number(num1 + num2);
        document.write("<center>O resultado da soma é: " + mais + "<br>");
        if (mais % 2 == 0) {
            document.write("<center>O número é <b>PAR</b>.");
        } else {
            document.write("<center>O número é <b>ÍMPAR</b>");
        }
        if (mais < 0) {
            document.write("<center>O número é <b>NEGATIVO</b>");
        } else {
            document.write("<center>O número é <b>POSITIVO</b>");
        }
        if (parseInt(mais) != parseFloat(mais)) {
            document.write("<center>O número é <b>REAL</b>.");
        } else {
            document.write("<center>O número é <b>INTEIRO</b>.");
        }
    break;
    case "-":
        menos = num1 - num2;
        document.write("<center>O resultado da subtração é: " + menos + "<br>");
        if (menos % 2 == 0) {
            document.write("<center>O número é <b>PAR</b>.");
        } else {
            document.write("<center>O número é <b>ÍMPAR</b>");
        }
        if (menos < 0) {
            document.write("<center>O número é <b>NEGATIVO</b>");
        } else {
            document.write("<center>O número é <b>POSITIVO</b>");
        }
        if (parseInt(menos) != parseFloat(menos)) {
            document.write("<center>O número é <b>REAL</b>.");
        } else {
            document.write("<center>O número é <b>INTEIRO</b>.");
        }
    break;
    case "*":
        vezes = num1 * num2;
        document.write("<center>O resultado da multiplicação é: " + vezes + "<br>");
        if (vezes % 2 == 0) {
            document.write("<center>O número é <b>PAR</b>.");
        } else {
            document.write("<center>O número é <b>ÍMPAR</b>");
        }
        if (vezes < 0) {
            document.write("núme<center>O ro é <b>NEGATIVO</b>");
        } else {
            document.write("<center>O número é <b>POSITIVO</b>");
        }
        if (parseInt(vezes) != parseFloat(vezes)) {
            document.write("<center>O número é <b>REAL</b>.");
        } else {
            document.write("<center>O número é <b>INTEIRO</b>.");
        }
    break;
    case "/":
        dividido = num1 / num2;
        document.write("<center>O resultado da divisão é: " + dividido + "<br>");
        if (dividido % 2 == 0) {
            document.write("<center>O número é <b>PAR</b>.");
        } else {
            document.write("<center>O número é <b>ÍMPAR</b>");
        }
        if (dividido < 0) {
            document.write("núme<center>O ro é <b>NEGATIVO</b>");
        } else {
            document.write("<center>O número é <b>POSITIVO</b>");
        }
        if (parseInt(dividido) != parseFloat(dividido)) {
            document.write("<center>O número é <b>REAL</b>.");
        } else {
            document.write("<center>O número é <b>INTEIRO</b>.");
        }
    break;
    default:
        alert("Impossível seguir com o programa.");
        location.reload();
}

