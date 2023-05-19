let cidadeMaiorIndice = "";
let cidadeMenorIndice = "";
let maiorIndice = 0;
let menorIndice = Number.MAX_VALUE;
let totalVeiculos = 0;
let totalAcidentes = 0;
let contadorCidadesMenor2000Veiculos = 0;
let mediaVeiculos = 0;
let mediaAcidentesMenor2000Veiculos = 0;

for (let i = 1; i <= 5; i++) {
  let codigoCidade = parseInt(prompt("Informe o código da cidade " + i + ":"));
  let veiculos = parseInt(prompt("Informe o número de veículos de passeio em 1999 na cidade " + codigoCidade + ":"));
  let acidentes = parseInt(prompt("Informe o número de acidentes de trânsito com vítimas em 1999 na cidade " + codigoCidade + ":"));

  totalVeiculos += veiculos;
  totalAcidentes += acidentes;

  if (acidentes > maiorIndice) {
    maiorIndice = acidentes;
    cidadeMaiorIndice = codigoCidade;
  }

  if (acidentes < menorIndice) {
    menorIndice = acidentes;
    cidadeMenorIndice = codigoCidade;
  }

  if (veiculos < 2000) {
    contadorCidadesMenor2000Veiculos++;
    mediaAcidentesMenor2000Veiculos += acidentes;
  }
}

mediaVeiculos = totalVeiculos / 5;
mediaAcidentesMenor2000Veiculos = mediaAcidentesMenor2000Veiculos / contadorCidadesMenor2000Veiculos;

document.write("<center>Maior índice de acidentes: " + maiorIndice + " (Cidade " + cidadeMaiorIndice + ")<br>");
document.write("Menor índice de acidentes: " + menorIndice + " (Cidade " + cidadeMenorIndice + ")<br>");
document.write("Média de veículos nas cinco cidades: " + mediaVeiculos.toFixed(2) + "<br>");
document.write("Média de acidentes de trânsito nas cidades com menos de 2000 veículos de passeio: " + mediaAcidentesMenor2000Veiculos.toFixed(2) + "</center>");