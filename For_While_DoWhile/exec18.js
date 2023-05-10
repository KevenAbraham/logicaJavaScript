let n = parseInt(prompt("Quantos números deseja informar?"));
let menor, maior, soma = 0;

for (let i = 0; i < n; i++) {
  let num = parseInt(prompt(`Informe o ${i+1}º número:`));
  
  if (i === 0) { 
    menor = num;
    maior = num;
  } else {
    if (num < menor) {
      menor = num;
    }
    if (num > maior) {
      maior = num;
    }
  }

  soma += num;
}

document.write(`<center>Menor valor: ${menor}`);
document.write(`<center>Maior valor: ${maior}`);
document.write(`<center>Soma dos valores: ${soma}`);
