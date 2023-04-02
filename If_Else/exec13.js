let a = parseFloat(prompt("Informe o valor de A:"));
let b = parseFloat(prompt("Informe o valor de B:"));
let c = parseFloat(prompt("Informe o valor de C:"));

delta = (b*b) + 4 * a * c;

if (delta > 0) {
    raiz1 = (-b + Math.sqrt(delta)) / (2*a);
    raiz2 = (-b - Math.sqrt(delta)) / (2*a);
    document.write("<center><b>Raíz 1: " + raiz1 + "<br>Raíz 2: " + raiz2);
} else if (delta == 0) {
    raiz = (-b + Math.sqrt(delta)) / (2*a);
    document.write("<center><b>Raíz dupla: " + raiz);
} else {
    document.write("<center>DELTA negativo. Não é possível concluir o cálculo.")
}