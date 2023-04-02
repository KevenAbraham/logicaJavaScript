let salario = parseFloat(prompt("Insira o seu salário: R$"));

if (salario <= 280.00) {
    let reajuste = salario * (20/100);
    let aumento = reajuste + salario;
    document.write("<center>Aqui vai algumas informações: <br>Salário antes do reajuste: R$<b>" + salario + "</b><br>Percentual de aumento aplicado: <b>20%</b><br>Valor do aumento: R$<b>" + reajuste + "</b><br>Novo salário: R$<b>" + aumento + "</b></center>");
} else if (salario <= 700.00) {
    let reajuste = (salario * (15/100));
    let aumento = reajuste + salario;
    document.write("<center>Aqui vai algumas informações: <br>Salário antes do reajuste: R$<b>" + salario + "</b><br>Percentual de aumento aplicado: <b>15%</b><br>Valor do aumento: R$<b>" + reajuste + "</b><br>Novo salário: R$<b>" + aumento + "</b></center>");
} else if (salario <= 1500.00) {
    let reajuste = (salario * (10/100));
    let aumento = reajuste + salario;
    document.write("<center>Aqui vai algumas informações: <br>Salário antes do reajuste: R$<b>" + salario + "</b><br>Percentual de aumento aplicado: <b>10%</b><br>Valor do aumento: R$<b>" + reajuste + "</b><br>Novo salário: R$<b>" + aumento + "</b></center>");
} else if (salario >= 1501.00) {
    let reajuste = (salario * (5/100));
    let aumento = reajuste + salario;
    document.write("<center>Aqui vai algumas informações: <br>Salário antes do reajuste: R$<b>" + salario + "</b><br>Percentual de aumento aplicado: <b>5%</b><br>Valor do aumento: R$<b>" + reajuste + "</b><br>Novo salário: R$<b>" + aumento + "</b></center>");
}