let n = parseInt(prompt("Informe o número:"))
let numeros = [];
let divisoes = 0;

for (let i = 0; i <= n; i++) {
  numeros.push(true);
}

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (numeros[i]) {
    for (let j = i * i; j <= n; j += i) {
      numeros[j] = false;
      divisoes++;
    }
  }
}

let primos = [];
for (let i = 2; i <= n; i++) {
  if (numeros[i]) {
    primos.push(i);
  }
}


document.write(`<center>Números primos entre 1 e ${n}: ${primos.join(", ")}`);
document.write(`<center><br>Número de divisões realizadas: ${divisoes}`);