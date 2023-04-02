let l1 = parseFloat(prompt("Informe o primeiro lado do triângulo:"));
let l2 = parseFloat(prompt("Informe o segundo lado do triângulo."));
let l3 = parseFloat(prompt("Informe o terceiro lado do triângulo."));

if (l1 + l2 > l3 || l1 + l3 > l2 || l2 + l3 > l1) {
    if (l1 == l2 && l1 == l3) {
        document.write("<center>É um triângulo <b>EQUILÁTERO</b>");
    } else if (l1 == l2 || l1 == l3 || l2 == l3) {
        document.write("<center>É um triângulo <b>ISÓCELES</b>");
    } else {
        document.write("<center>É um triângulo <b>ESCALENO</b>");
    }
} else {
    document.write("<center>Por favor, preencha os campos de acordo.");
}