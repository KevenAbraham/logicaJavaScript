let divida = parseFloat(prompt("Informe o valor da dívida:"));

document.write("<center>Valor da Dívida | Valor dos Juros | Quantidade de Parcelas | Valor da Parcela<br>");

document.write("R$ " + divida.toFixed(2) + " | 0 | 1 | R$ " + divida.toFixed(2) + "<br>");

let juros = 0.1;
let parcelas = 3;
let valorParcela = (divida * (1 + juros)) / parcelas;

for (let i = 2; i <= 5; i++) {
  divida += divida * juros;

  switch (i) {
    case 2:
      parcelas = 3;
      juros = 0.1;
      break;
    case 3:
      parcelas = 6;
      juros = 0.15;
      break;
    case 4:
      parcelas = 9;
      juros = 0.2;
      break;
    case 5:
      parcelas = 12;
      juros = 0.25;
      break;
  }

  valorParcela = divida / parcelas;

  document.write("R$ " + divida.toFixed(2) + " | R$ " + (divida - (divida / (1 + juros))).toFixed(2) + " | " + parcelas + " | R$ " + valorParcela.toFixed(2) + "<br>");
}
