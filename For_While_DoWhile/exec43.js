let atleta = prompt("Informe o nome do atleta:");

let menorSalto = Infinity;
let maiorSalto = 0;
let mediaSalto = 0;
let saltoMeio = [];

for(i = 1; i <= 5; i++) {
    let salto = parseFloat(prompt(`Informe o ${i}° salto do ${atleta}`));

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

document.write(`<center>Melhor salto: ${maiorSalto.toFixed(2)}m<br>`);
document.write(`Pior salto: ${menorSalto.toFixed(2)}m<br>`);
document.write(`Media dos demais saltos: ${mediaSalto.toFixed(2)}m<br><br>`);
document.write(`<b>Resultado final</b><br>`)
document.write(`${atleta}: ${mediaSalto.toFixed(2)}m`);
