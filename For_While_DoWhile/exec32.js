let qtd = parseInt(prompt("Informe a quantidade de temperaturas para ser analisada:"));

let mediaTemperatura = [];
let maior = 0;
let menor = 100000000;

for(i = 1; i <= qtd; i++) {
    let res = parseFloat(prompt("Informe a " + i + "° temperatura"));

    mediaTemperatura.push(res);

    if (res > maior) {
        maior = res;
    }

    if (res < menor) {
        menor = res;
    }
}


media = mediaTemperatura.reduce((acc, cur) => acc + cur, 0) / (i - 1); 

document.write(`<center>A maior temperetura registrada foi: ${maior}°C`);
document.write(`<center>A menor temperatura registrada foi: ${menor}°C`);
document.write(`<center>Ao todo, foram registradas ${i} temperaturas. A média delas é: ${media.toFixed(1)}°C`);