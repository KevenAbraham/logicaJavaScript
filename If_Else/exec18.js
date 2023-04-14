let saque = parseFloat(prompt("Informe o valor para saque: R$"));

if (saque < 10.0) {
    document.write("<center>O valor precisa ser maior que R$10,00");
} else if (saque > 600.0) {
    document.write("<center>O valor precisa ser menor que R$600,00");
} else {
    let notas100 = 0;
    let notas50 = 0;
    let notas10 = 0;
    let notas5 = 0;
    let notas1 = 0;

    while (saque >= 100) {
        notas100++;
        saque -= 100;
    }

    while (saque >= 50) {
        notas50++;
        saque -= 50;
    }

    while (saque >= 10) {
        notas10++;
        saque -= 10;
    }

    while (saque >= 5) {
        notas5++;
        saque -= 5;
    }

    while (saque >= 1) {
        notas1++;
        saque -= 1;
    }

    document.write("<center>Para sacar a quantidade desejada, estas notas estão disponíveis:<br><br>");

    if (notas100 > 0) {
        document.write("<center>" + notas100 + " nota(s) de R$100<br>");
    }
    if (notas50 > 0) {
        document.write("<center>" + notas50 + " nota(s) de R$50<br>");
    }
    if (notas10 > 0) {
        document.write("<center>" + notas10 + " nota(s) de R$10<br>");
    }
    if (notas5 > 0) {
        document.write("<center>" + notas5 + " nota(s) de R$5<br>");
    }
    if (notas1 > 0) {
        document.write("<center>" + notas1 + " nota(s) de R$1<br>");
    }
}