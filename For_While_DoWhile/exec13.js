let base = parseInt(prompt("Informe um número para a base:"));
let expoente = parseInt(prompt("Informe um número para o expoente:"));

let resultado = 1;

for(let i = 1; i <= expoente; i++) {
  resultado *= base;
}

document.write("<center>" + base + " elevado a " + expoente + " é igual a " + resultado);