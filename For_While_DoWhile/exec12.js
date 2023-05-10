let num = parseInt(prompt("Informe um número inteiro de 1 a 10"));

while (num < 1 || num > 10) {
  num = parseInt(prompt("Número inválido! Informe um número inteiro de 1 a 10"));
}

document.write("<center>Tabuada de " + num + ":");

for (let i = 1; i <= 10; i++) {
  let resultado = num * i;
  document.write("<center>" + num + " x " + i + " = " + resultado);
}