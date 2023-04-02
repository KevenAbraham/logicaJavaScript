let valor = parseFloat(prompt("Notas disponíveis para saque: [1, 5, 10, 50, 100]\nInsira o valor a ser sacado: R$"));

if (valor >= 100.0) {
    centena = valor / 100;
    dezena = (valor % 100) / 10;
    unidade = (valor % 100) % 10;

    
}








































// if (valor >= 100.0) {
//     //caso o valor seja maior ou igual a 100 (tenha centena)
//     centena = Math.floor(valor / 100); // a centena (qtd de notas de 100)
//     dezena = Math.floor((valor % 100) / 10); 
//     unidade = (num % 100) % 10;

//     if (dezena >= 50) { //caso precise de uma nota de 50
//         if (unidade <= 4) { //nao usarei nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula(s) de R$100,00: " + centena + "<br>Cédula de R$50,00 = 1<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Notas de R$1,00: " + unidade);
//         } else { //usarei uma nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula(s) de R$100,00: " + centena + "<br>Cédula de R$50,00 = 1<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Notas de R$5,00: 1" +  "<br>Notas de R$1,00: " + unidade);
//         }    
//     } else {
//         // caso nao precise de uma nota de 50
//         if (unidade <= 4) {
//             //nao usarei nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula(s) de R$100,00: " + centena + "<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Notas de R$1,00: " + unidade);
//         } else {
//             //usarei nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula(s) de R$100,00: " + centena + "<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Cédula de R$5,00: 1<br>Notas de R$1,00: " + unidade);
//         }       
//     }
// } else {
//     //caso o valor seja menor ou igual a 99 (nao tenha centena)
//     dezena = Math.floor((valor % 100) / 10); 
//     unidade = (num % 100) % 10;

//     if (dezena >= 50) {
//         //caso precise de uma nota de 50
//         if (unidade <= 4) {
//             //nao usarei nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula de R$50,00 = 1<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Notas de R$1,00: " + unidade);
//         } else {
//             //usarei uma nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula(s) de R$100,00: " + centena + "<br>Cédula de R$50,00 = 1<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Notas de R$5,00: 1" +  "<br>Notas de R$1,00: " + unidade);
//         }  
          
//     } else {
//         // caso nao precise de uma nota de 50
//         if (unidade <= 4) {
//             //nao usarei nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula(s) de R$100,00: " + centena + "<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Notas de R$1,00: " + unidade);
//         } else {
//             //usarei nota de 5
//             document.write("<center>Imprimindo cédulas:<br>Cédula(s) de R$100,00: " + centena + "<br>Cédula(s) de R$10,00: " + (centena % dezena) + "<br>Cédula de R$5,00: 1<br>Notas de R$1,00: " + unidade);
//         }       
//     }
// } 
