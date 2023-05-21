let nulo = 0, branco = 0, candA = 0, candB = 0, candC = 0, candD = 0, percA = 0, percB = 0, percD = 0, percC = 0, percBranco = 0, percNulo = 0, voto = 0;

do {
    voto = parseInt(prompt("Informe em quem irá votar: \n\n1 - Candidato A\n2 - Candidato B\n3 - Candidato C\n4 - Candidato D\n5 - Voto nulo\n6 - Voto em branco\n\nInsira 0 para encerrar o programa"));

    if (voto == 0) {
        break;
    }

    switch(voto) {
        case 1:
            candA += 1;
        break;
        case 2:
            candB += 1;
        break;
        case 3:
            candC += 1;
        break;
        case 4:
            candD += 1;
        break;
        case 5:
            nulo += 1;
        break;
        case 6:
            branco += 1;
        break;
        default:
            alert("Insira um valor correspondente:");
        break;
    }


} while(voto != 0)

let totalVotos = candA + candB + candC + candD + nulo + branco;

percA = (candA / totalVotos) * 100;
percB = (candB / totalVotos) * 100;
percC = (candC / totalVotos) * 100;
percD = (candD / totalVotos) * 100;
percBranco = (branco / totalVotos) * 100;
percNulo = (nulo / totalVotos) * 100;

document.write(`<center>Lista de votos:<br><br>`);
document.write(`<b>Candidato A</b> = ${candA} votos. Cerca de ${percA.toFixed(2)}% de votos.<br><br><br>`);
document.write(`<b>Candidato B</b> = ${candB} votos. Cerca de ${percB.toFixed(2)}% de votos.<br><br><br>`);
document.write(`<b>Candidato C</b> = ${candC} votos. Cerca de ${percC.toFixed(2)}% de votos.<br><br><br>`);
document.write(`<b>Candidato D</b> = ${candD} votos. Cerca de ${percD.toFixed(2)}% de votos.<br><br><br>`);
document.write(`<b>Votos nulo</b> = ${nulo} votos. Cerca de ${percNulo.toFixed(2)}% de votos.<br><br><br>`);
document.write(`<b>Votos em branco</b> = ${branco} votos. Cerca de ${percBranco.toFixed(2)}% de votos.<br><br><br>`);

