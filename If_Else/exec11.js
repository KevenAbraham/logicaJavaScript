let n1 = parseFloat(prompt("Informe a primeira nota do aluno: "));
let n2 = parseFloat(prompt("Informe a segunda nota do aluno: "));

media = (n1 + n2) / 2;

if (media >= 9.0 && media <= 10.0) {
    document.write("<center>Sua nota foi:<b> " + media + "</b><br>Conceito: <b>A</b>");
} else if (media >= 7.5 && media <= 8.9) {
    document.write("<center>Sua nota foi:<b> " + media + "</b><br>Conceito: <b>B</b>");
} else if (media >= 6.0 && media <= 7.4) {
    document.write("<center>Sua nota foi:<b> " + media + "</b><br>Conceito: <b>C</b>");
} else if (media >= 4.0 && media <= 5.9) {
    document.write("<center>Sua nota foi:<b> " + media + "</b><br>Conceito: <b>D</b>");
} else if (media >= 0 && media <= 3.9) {
    document.write("<center>Sua nota foi:<b> " + media + "</b><br>Conceito: <b>E</b>");
} else {
    document.write("<center>Nota inválida.");
}