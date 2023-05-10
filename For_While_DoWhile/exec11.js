let num1 = parseInt(prompt("Informe o primeiro número inteiro"));
let num2 = parseInt(prompt("Informe o segundo número inteiro"));

let soma = 0;

if (num1 <= num2) {
  for (let i = num1; i <= num2; i++) {
    soma += i;
  }
} else {
  for (let i = num2; i <= num1; i++) {
    soma += i;
  }
}

document.write("<center>A soma dos números é: " + soma);
