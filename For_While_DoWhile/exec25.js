let qtd = parseInt(prompt("Informe a quantidade de pessoas:"));

somaIdade = [];
for(i=1; i <= qtd; i++) {
    let idade = parseInt(prompt("Informe a idade da " + i + "ª pessoa:"));
    somaIdade.push(idade);
}

media = 0;
for(j = 0; j < somaIdade.length; j++) {
    media += somaIdade[j];
}

media = media / somaIdade.length;

document.write(`<center>A média da idade das pessoas é ${media}`);

if (media <= 25) {
    document.write(`<center>Portanto, a maioria é <b>Jovem</b>.`);
} else if (media <= 60) {
    document.write(`<center>Portanto, a maioria é <b>Adulta</b>.`);
} else if (media >= 61) {
    document.write(`<center>Portanto, a maioria é <b>Idosa</b>.`);
}

