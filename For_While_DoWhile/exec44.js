let atleta = prompt("Informe o nome do atleta:");

let menorSalto = Infinity;
let maiorSalto = 0;
let mediaSalto = 0;
let saltoMeio = [];

for(i = 1; i <= 7; i++) {
    let salto = parseFloat(prompt(`Informe a nota do ${i}° jurado`));

    if(salto < menorSalto) {
        menorSalto = salto;
    }

    if(salto > maiorSalto) {
        maiorSalto = salto;
    }

    saltoMeio.push(salto);
}

saltoMeio.splice(saltoMeio.indexOf(maiorSalto), 1); //metodo splice serve para remover o maior salto
saltoMeio.splice(saltoMeio.indexOf(menorSalto), 1); //metodo splice serve para remover o menor salto

mediaSalto = saltoMeio.reduce((acc, val) => acc + val, 0) / saltoMeio.length;

document.write(`<center><b>Resultado final</b><br>`);
document.write(`${atleta}: ${mediaSalto.toFixed(1)}<br>`);
document.write(`Melhor salto: ${maiorSalto.toFixed(1)}<br>`);
document.write(`Pior salto: ${menorSalto.toFixed(1)}<br>`);
