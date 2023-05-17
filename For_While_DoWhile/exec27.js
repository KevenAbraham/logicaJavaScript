let Turmas = parseInt(prompt("Informe a quantidade de turmas:"));
let total = 0;

for (i = 1; i <= numTurmas; i++) {
    let Alunos = parseInt(prompt(`Informe a quantidade de alunos na turma ${i}:`));
    
    while (Alunos > 40) {
        Alunos = parseInt(prompt("A quantidade de alunos não pode ser maior que 40. Informe novamente:"));
    }
    
    total += Alunos;
}

let media = Alunos / Turmas;

document.write(`Número médio de alunos por turma: ${media}`);