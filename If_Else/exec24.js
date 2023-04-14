let carne = parseInt(prompt("Informe qual o tipo de carne você deseja\n1- Filé Duplo\n2- Alcatra\n3- Picanha"));

switch (carne) {
    case 1:
        let kgFile = parseFloat(prompt("Informe a quantidade em Kgs do Filé Duplo:"));
        if (kgFile <= 5) {
            valorFile = kgFile * 4.90;
        } else {
            valorFile = kgFile * 5.80;
        }

        let pagamentoFile = prompt("O valor será de R$" + valorFile.toFixed(2) + ".\nA conta será paga no cartão Tabajara? [S/N]").toUpperCase();
        if (pagamentoFile == "S") {
            desconto = valorFile * 0.05;
            valorTotal = valorFile - desconto;
            document.write("<center>============NOTA FISCAL============<br>");
            document.write(`<center>Quantidade de carne (Kg)...... <b>${kgFile}Kg<br></b>`);
            document.write(`<center>Preço total................... <b>R$${valorFile.toFixed(2)}<br></b>`);
            document.write(`<center>Forma de pagamento............ <b>Cartão Tabajara<br></b>`);
            document.write(`<center>Valor do Desconto (5%)........ <b>R$${desconto.toFixed(2)}<br></b>`);
            document.write(`<center>Valor total a pagar........... <b>R$${valorTotal.toFixed(2)}<br></b>`);
        } else {
            valorTotal = valorFile;
            document.write("<center>============NOTA FISCAL============<br>");
            document.write(`<center>Quantidade de carne (Kg)...... <b>${kgFile}Kg<br></b>`);
            document.write(`<center>Preço total................... <b>R$${valorFile.toFixed(2)}<br></b>`);
            document.write(`<center>Forma de pagamento............ <b>Débito<br></b>`);
            document.write(`<center>Valor do Desconto............. <b>R$0.00<br></b>`);
            document.write(`<center>Valor total a pagar........... <b>R$${valorTotal.toFixed(2)}<br></b>`);
        }
    break;
    case 2:
        let kgAlcatra = parseFloat(prompt("Informe a quantidade em Kgs de Alcatra:"));
        if (kgAlcatra <= 5) {
            valorAlcatra = kgAlcatra * 4.90;
        } else {
            valorAlcatra = kgAlcatra * 5.80;
        }

        let pagamentoAlcatra = prompt("O valor será de R$" + valorAlcatra.toFixed(2) + ".\nA conta será paga no cartão Tabajara? [S/N]").toUpperCase();
        if (pagamentoAlcatra == "S") {
            desconto = valorAlcatra * 0.05;
            valorTotal = valorAlcatra - desconto;
            document.write("<center>============NOTA FISCAL============<br>");
            document.write(`<center>Quantidade de carne (Kg)...... <b>${kgAlcatra}Kg<br></b>`);
            document.write(`<center>Preço total................... <b>R$${valorAlcatra.toFixed(2)}<br></b>`);
            document.write(`<center>Forma de pagamento............ <b>Cartão Tabajara<br></b>`);
            document.write(`<center>Valor do Desconto (5%)........ R$${desconto.toFixed(2)}<br></b>`);
            document.write(`<center>Valor total a pagar........... R$${valorTotal.toFixed(2)}<br></b>`);
        } else {
            valorTotal = valorAlcatra;
            document.write("<center>============NOTA FISCAL============<br>");
            document.write(`<center>Quantidade de carne (Kg)...... <b>${kgAlcatra}Kg<br></b>`);
            document.write(`<center>Preço total................... <b>R$${valorAlcatra.toFixed(2)}<br></b>`);
            document.write(`<center>Forma de pagamento............ <b>Débito<br></b>`);
            document.write(`<center>Valor do Desconto............. <b>R$0.00<br></b>`);
            document.write(`<center>Valor total a pagar........... <b>R$${valorTotal.toFixed(2)}<br></b>`);
        }
    break;
    case 3:
        let kgPicanha = parseFloat(prompt("Informe a quantidade em Kgs de Picanha:"));
        if (kgPicanha <= 5) {
            valorPicanha = kgPicanha * 4.90;
        } else {
            valorPicanha = kgPicanha * 5.80;
        }

        let pagamentoPicanha = prompt("O valor será de R$" + valorPicanha.toFixed(2) + ".\nA conta será paga no cartão Tabajara? [S/N]").toUpperCase();
        if (pagamentoPicanha == "S") {
            desconto = valorPicanha * 0.05;
            valorTotal = valorPicanha - desconto;
            document.write("<center>============NOTA FISCAL============<br>");
            document.write(`<center>Quantidade de carne (Kg)...... <b>${kgPicanha}Kg<br></b>`);
            document.write(`<center>Preço total................... <b>R$${valorPicanha.toFixed(2)}<br></b>`);
            document.write(`<center>Forma de pagamento............ <b>Cartão Tabajara<br></b>`);
            document.write(`<center>Valor do Desconto (5%)........ <b>R$${desconto.toFixed(2)}<br></b>`);
            document.write(`<center>Valor total a pagar........... <b>R$${valorTotal.toFixed(2)}<br></b>`);
        } else {
            valorTotal = valorPicanha;
            document.write("<center>============NOTA FISCAL============<br>");
            document.write(`<center>Quantidade de carne (Kg)...... <b>${kgPicanha}Kg<br></b>`);
            document.write(`<center>Preço total................... <b>R$${valorPicanha.toFixed(2)}<br></b>`);
            document.write(`<center>Forma de pagamento............ <b>Débito<br></b>`);
            document.write(`<center>Valor do Desconto............. <b>R$0.00<br></b>`);
            document.write(`<center>Valor total a pagar........... <b>R$${valorTotal.toFixed(2)}</b><br>`);
        }
    break;
    default:
        let res = confirm("Ops, parece que não consegui entender o que quis dizer. Poderia repetir, por favor?");
        if (res == true) {
            location.reload();
        } else{
            document.write(`<center>Não há nada que ver por aqui...`);
        }
    break;
}