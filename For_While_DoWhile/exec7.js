var maior = Number.MIN_SAFE_INTEGER; 
for (var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt("Digite o número " + i + ":"));
  if (numero > maior) {
    maior = numero;
  }
}
document.write("<center>O maior numero é: " + maior);