let num = parseInt(prompt("Informe a quantidade de termos da série:"));
let serie = 0;
let dividendo = 1;

for (let i = 1; i <= num; i++) {
    serie += i / dividendo;
    dividendo += 2;
}

document.write("<center>Série:");

for (let i = 1; i <= num; i++) {
    if (i != num) {
        document.write(i + "/" + (2 * i - 1) + " + ");
    } else {
        document.write(i + "/" + (2 * i - 1));
    }
}

document.write("<br>");
document.write("<center>Soma da série: " + serie.toFixed(2));