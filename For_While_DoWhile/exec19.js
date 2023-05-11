let numeros = [];
let numero;

for (let i = 0; i < 5; i++) {
  numero = parseInt(prompt("Digite um número entre 0 e 1000: "));
  
  while (numero < 0 || numero > 1000) {
    numero = parseInt(prompt("Número inválido! Digite um número entre 0 e 1000: "));
  }
  
  numeros.push(numero);
}

let soma = 0;
let maior = numeros[0];
let menor = numeros[0];

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
  
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

document.write("<center>Maior número: " + maior);
document.write("<center>Menor número: " + menor);
document.write("<center>Soma dos números: " + soma);