let n1 = parseFloat(prompt("Informe a primeira nota:"));
let n2 = parseFloat(prompt("Informe a segunda nota:"));

let media = (n1 + n2) / 2;

if (media >= 7 && media <= 9.9) {
    document.write("<center>O aluno ficou com média: " + media + ", portanto, ele está <b>APROVADO</b></center>");
} else if (media == 10) {
    document.write("<center>O aluno ficou com média: " + media + ", portanto, ele está <b>APROVADO COM DISTINÇÃO</b></center>");
} else {
    document.write("<center>O aluno ficou com média: " + media + ", portanto, ele está <b>REPROVADO</b></center>");
}