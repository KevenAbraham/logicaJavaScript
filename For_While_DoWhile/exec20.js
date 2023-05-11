let numero, fatorial;

do {
  numero = parseInt(prompt("Informe um número inteiro positivo e menor que 16 para calcular seu fatorial:"));
} while (numero < 0 || numero >= 16 || isNaN(numero));

fatorial = 1;

for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}

document.write("<center>O fatorial de " + numero + " é: " + fatorial);