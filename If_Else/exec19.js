let num = prompt("Insira um número:");

if (parseInt(num) != parseFloat(num)) {
    document.write("<center>O número é <b>REAL</b>.");
} else {
    document.write("<center>O número é <b>INTEIRO</b>.");
}