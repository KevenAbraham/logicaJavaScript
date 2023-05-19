let limite = parseInt(prompt("Informe um número inteiro:"));
let primos = [];

for (let numero = 2; numero <= limite; numero++) {
  let ehPrimo = true;

  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    primos.push(numero);
  }
}

document.write(`<center>Números primos entre 1 e ${limite}: ${primos.join(", ")}`);