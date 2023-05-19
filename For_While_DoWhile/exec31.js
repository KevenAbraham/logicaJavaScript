let i = 1;
let total = [];
let preco = 0;

do {
    preco = parseFloat(prompt("Informe o valor do " + i + "° produto: R$"));
    total.push(preco);
    i++;
} while(preco != 0);

let pagamento = parseFloat(prompt("Informe o valor em dinheiro fornecido pelo cliente: R$"));

let troco = pagamento - total.reduce((acc, cur) => acc + cur, 0); 

// reduce -> método de array que permite reduzir um array a um único valor, aplicando uma função de redução em cada elemento do array

// (acc, cur) => acc + cur -> função de callback que define a operação de redução. nesse caso, acc == acumulador e cur == valor atual, e retorna a soma do acumulador com o valor atual 

// 0 = é o valor inicial do acumulador. no caso acima, o valor é inicializado com 0.

document.write(`<center>Total a se pagar: R$${total.reduce((acc, cur) => acc + cur, 0).toFixed(2)}<br>Dinheiro entregue pelo cliente: R$${pagamento.toFixed(2)}<br>Troco: R$${troco.toFixed(2)}`);