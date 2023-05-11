let numero = parseInt(prompt("Informe um número inteiro:"));
let primo = true;
let divisores = [];

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    primo = false;
    divisores.push(i);
  }
}

if (primo) {
  document.write("<center>" + numero + " é um número primo.");
} else {
  document.write("<center>" + numero + " não é um número primo. Divisores: " + divisores.join(", "));
}