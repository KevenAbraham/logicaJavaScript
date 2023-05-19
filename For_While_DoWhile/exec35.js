let tabuada = parseInt(prompt("De qual número é a tabuada?"));

let inicio = parseInt(prompt("De qual número deve ser iniciada?"));

let fim = parseInt(prompt("De qual número deve ser finalizada?"));

let text = document.getElementById('text');
text.innerHTML = "Tabuada do " + tabuada;

if (inicio >= fim) {
    alert("O número de inicio não pode ser maior que o número final.");
    location.reload();
} else {
    for(inicio; inicio <= fim; inicio++) {
        document.write(`<center>${tabuada} x ${inicio} = ${tabuada * inicio}`);
    }
}
