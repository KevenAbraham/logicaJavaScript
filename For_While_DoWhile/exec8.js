var soma = 0;
for (var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt("Digite o número " + i + ":"));
  soma += numero;
}
var media = soma / 5;

document.write("<center>A soma dos números é: " + soma);
document.write("<center>A média dos números é: " + media);