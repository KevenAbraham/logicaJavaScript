nota = -1;20

while (nota < 0 || nota > 10) {
    let res = parseFloat(prompt("Informe a nota: "));
    nota = res;

    if (nota < 0 || nota > 10) {
        alert("A nota não confere. Por favor, tente de novo!");
        location.reload();
    }
}

document.write(`<center>A nota do aluno é: ${nota}`);