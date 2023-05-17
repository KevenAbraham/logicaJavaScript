let total = parseInt(prompt("Informe o total de CD's que vocÊ têm:"));

somaCD = 0;
for(i=1; i<=total; i++) {
    let valor = parseFloat(prompt("Informe quanto você pagou no " + i + "° CD:"));

    somaCD += valor;
}

let media = somaCD / total;

document.write(`<center>Você gastou ao todo R$${somaCD.toFixed(2)} em CD's.<br>Uma média de R$${media.toFixed(2)}`);