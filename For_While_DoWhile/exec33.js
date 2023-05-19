let numero = parseInt(prompt("Digite um número inteiro:"));
let primo = true;

if (numero <= 1) {
  primo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i == 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  document.write(`<center>O número ${numero} é primo.</center>`);
} else {
  document.write(`<center>O número ${numero} não é primo.</center>`);
}