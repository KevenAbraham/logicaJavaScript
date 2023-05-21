let total = 0;
codigo = 0;
do {
    codigo = parseInt(prompt("Informe o código do produto:\n\n1 - Cachorro Quente         R$ 1,20\n2 - Bauru Simples              R$ 1,30\n3 - Bauru com ovo             R$ 1,50\n4 - Hambúrguer                 R$ 1,20\n5 - Cheeseburguer             R$ 1,30\n6 - Refrigerante                  R$ 1,00\n\nDigite 0 para finalizar o pedido"));

    switch(codigo) {
        case 1: //cachorro quente
            total += 1.20;
        break; 
        case 2: //bauru simples
            total += 1.30;
        break;
        case 3: //bauru com ovo
            total += 1.50;
        break;
        case 4: //hambuerguer
            total += 1.20;
        break;
        case 5: //chessburguer
            total += 1.30;
        break;
        case 6: //refrigerante
            total += 1.00;
        break;
    }
} while (codigo != 0);

document.write(`<center>O valor total é: R$${total.toFixed(2)}`);