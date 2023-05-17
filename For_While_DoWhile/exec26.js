let lula = [];
let bolsonaro = [];
let ciro = [];

let eleitores = parseInt(prompt("Informe a quantidade de eleitores presente:"));

for (i = 1; i <= eleitores; i++) {
    let voto = parseInt(prompt("Informe o candidato em que você vota: \nLulinha = 1\nBolsonaro = 2\nCiro Trakinas de Limão = 3"));

    switch (voto) {
        case 1:
            lula.push(voto);
            break;
        case 2:
            bolsonaro.push(voto);
            break;
        case 3:
            ciro.push(voto);
            break;
        default:
            alert("Insira um valor válido.");
            break;
    }
}

document.write(`<center>Houveram cerca de ${eleitores} votos. Sendo:<br>${lula.length} votos no Lulinha <3<br>${bolsonaro.length} votos no Bolsonaro.<br>${ciro.length} votos no Ciro KKKKKKKKKKK.`);