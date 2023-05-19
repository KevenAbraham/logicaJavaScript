let salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário:"));

let anoContratacao = 1995;
let salarioAtual = salarioInicial;
let percentualAumento = 1.5; // Aumento inicial em 1996

for (let ano = 1996; ano <= new Date().getFullYear(); ano++) {
  salarioAtual += (salarioAtual * percentualAumento) / 100;
  percentualAumento *= 2;
}

document.write("<center>Salário inicial em " + anoContratacao + ": R$" + salarioInicial.toFixed(2) + "<br>");
document.write("Salário atual em " + new Date().getFullYear() + ": R$" + salarioAtual.toFixed(2) + "</center>");