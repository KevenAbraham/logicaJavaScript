let tabuada = parseInt(prompt("De qual número é a tabuada?"));

let inicio = parseInt(prompt("De qual número deve ser iniciada?"));

let fim = parseInt(prompt("De qual número deve ser finalizada?"));

let text = document.getElementById('text');
text.innerHTML = "Tabuada do " + tabuada;

for(inicio; inicio <= fim; inicio++) {
    document.write(`<center>${tabuada} x ${inicio} = ${tabuada * inicio}`);
}