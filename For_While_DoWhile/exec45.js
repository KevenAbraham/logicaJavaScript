let numero = parseInt(prompt("Digite um número inteiro positivo:"));

let numeroInvertido = 0;
while (numero > 0) {
  let digito = numero % 10; // Obtém o último dígito do número
  numeroInvertido = numeroInvertido * 10 + digito; // Acrescenta o dígito invertido ao número invertido
  numero = Math.floor(numero / 10); // Remove o último dígito do número original
}


document.write(`<center>Número invertido: ${numeroInvertido}`);