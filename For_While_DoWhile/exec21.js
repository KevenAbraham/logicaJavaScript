let numero = parseInt(prompt("Informe um número inteiro:"));
let primo = true;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    primo = false;
    break;
  }
}

if (primo) {
  document.write("<center>" + numero + " é um número primo.");
} else {
  document.write("<center>" + numero + " não é um número primo.");
}