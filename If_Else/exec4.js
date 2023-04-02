let num1 = parseInt(prompt("Informe o primeiro valor:"));
let num2 = parseInt(prompt("Informe o segundo valor:"));

num3 = num1; //esse é só pra receber o primeiro valor
num1 = num2;
num2 = num3;

alert("Os números inverteram!\nAgora o primeiro número é o: " + num1 + "\nE o segundo número é o: " + num2);

document.write("<center>Os números inverteram!<br>Agora o primeiro número é o: " + num1 + "<br>E o segundo número é o: " + num2);