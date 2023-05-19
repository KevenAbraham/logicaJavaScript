let codigoMaisAlto, codigoMaisBaixo, codigoMaisGordo, codigoMaisMagro;
let alturaMaisAlto = 0, alturaMaisBaixo = Infinity;
let pesoMaisGordo = 0, pesoMaisMagro = Infinity;
let somaAlturas = 0, somaPesos = 0;
let contador = 0;

do {
  let codigo = parseInt(prompt("Informe o código do cliente (ou digite 0 para encerrar):"));

  if (codigo !== 0) {
    let altura = parseFloat(prompt("Informe a altura do cliente em metros:"));
    let peso = parseFloat(prompt("Informe o peso do cliente em quilogramas:"));

    if (altura > alturaMaisAlto) {
      alturaMaisAlto = altura;
      codigoMaisAlto = codigo;
    }

    if (altura < alturaMaisBaixo) {
      alturaMaisBaixo = altura;
      codigoMaisBaixo = codigo;
    }

    if (peso > pesoMaisGordo) {
      pesoMaisGordo = peso;
      codigoMaisGordo = codigo;
    }

    if (peso < pesoMaisMagro) {
      pesoMaisMagro = peso;
      codigoMaisMagro = codigo;
    }

    somaAlturas += altura;
    somaPesos += peso;

    contador++;
  }
} while (codigo !== 0);

if (contador > 0) {
  let mediaAlturas = somaAlturas / contador;
  let mediaPesos = somaPesos / contador;

  document.write("<center>Cliente mais alto: Código " + codigoMaisAlto + ", Altura " + alturaMaisAlto.toFixed(2) + "m<br>");
  document.write("<center>Cliente mais baixo: Código " + codigoMaisBaixo + ", Altura " + alturaMaisBaixo.toFixed(2) + "m<br>");
  document.write("<center>Cliente mais gordo: Código " + codigoMaisGordo + ", Peso " + pesoMaisGordo.toFixed(2) + "kg<br>");
  document.write("<center>Cliente mais magro: Código " + codigoMaisMagro + ", Peso " + pesoMaisMagro.toFixed(2) + "kg<br>");
  document.write("<center>Média das alturas dos clientes: " + mediaAlturas.toFixed(2) + "m<br>");
  document.write("<center>Média dos pesos dos clientes: " + mediaPesos.toFixed(2) + "kg</center>");
} else {
  document.write("<center>Nenhum cliente cadastrado.</center>");
}