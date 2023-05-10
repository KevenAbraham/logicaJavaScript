let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  let num = parseInt(prompt("Informe o " + i + "º número inteiro:"));
  if (num % 2 == 0) {
    pares++;
  } else {
    impares++;
  }
}

document.write("<center>A quantidade de números pares: " + pares + "<br>");
document.write("<center>A quantidade de números ímpares: " + impares);