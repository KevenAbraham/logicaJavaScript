let num = parseInt(prompt("Informe quantas notas você irá inserir:"));
media = 0;
soma = [];
for(i=1; i<=num; i++) {
    let values = parseInt(prompt(i + "ª nota:"));
    soma = [values];
}

for (j=0; j < soma.length; j++) {
    media += soma[j];
}

media = media / soma.length;

document.write(`<center>A media dos valores é: ${media}`);