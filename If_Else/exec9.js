let hora = parseInt(prompt("Informe a quantidade de hora trabalhada:"));
let valor = parseFloat(prompt("Informe o valor da hora: R$"));

salarioBruto = 5 * (valor * hora);
fgts = salarioBruto * (11/100);
inss = salarioBruto *(10/100);

if (salarioBruto <= 900.0) {
    document.write("<center>Você está isento.<br><br>Salário bruto: R$" + salarioBruto + "<br><br>IR: 0%<br>R$ 0.00<br><br>INSS: 0%<br>R$ 0.00<br><br>FGTS: R$" + fgts + "<br><br>Total de descontos: R$ 0.00<br><br>Salário Líquido: R$" + salarioBruto);
} else if (salarioBruto <= 1500.0) {
    ir = salarioBruto * (5/100);
    totalDesconto = inss + ir;
    salarioLiquido = salarioBruto - totalDesconto;
    document.write("<center>Desconto de 5%<br><br>Salário bruto: R$" + salarioBruto + "<br><br>IR : 5%<br>R$" + ir + "<br><br>INSS: 10%<br>R$" + inss + "<br><br>FGTS: 11%<br>R$" + fgts + "<br><br>Total de descontos: R$" + totalDesconto + "<br><br><b>Salário Líquido: R$" + salarioLiquido);
} else if (salarioBruto <= 2500) {
    ir = salarioBruto * (10/100);
    totalDesconto = inss + ir;
    salarioLiquido = salarioBruto - totalDesconto;
    document.write("<center>Desconto de 10%<br><br>Salário bruto: R$" + salarioBruto + "<br><br>IR : 10%<br>R$" + ir + "<br><br>INSS: 10%<br>R$" + inss + "<br><br>FGTS: 11%<br>R$" + fgts + "<br><br>Total de descontos: R$" + totalDesconto + "<br><br><b>Salário Líquido: R$" + salarioLiquido);
} else {
    ir = salarioBruto * (20/100);
    totalDesconto = inss + ir;
    salarioLiquido = salarioBruto - totalDesconto;
    document.write("<center>Desconto de 20%<br><br>Salário bruto: R$" + salarioBruto + "<br><br>IR : 20%<br>R$" + ir + "<br><br>INSS: 10%<br>R$" + inss + "<br><br>FGTS: 11%<br>R$" + fgts + "<br><br>Total de descontos: R$" + totalDesconto + "<br><br><b>Salário Líquido: R$" + salarioLiquido);
}