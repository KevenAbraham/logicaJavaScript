let num = parseInt(prompt("Informe um número inteiro para calcular o fatorial:"));
let fatorial = 1;

for (let i = 1; i <= num; i++) {
  fatorial *= i;
}

document.write(`<center>O fatorial de ${num} é ${fatorial}.`);