let n1 = parseFloat(prompt("Informe a primeira nota do aluno: "));
let n2 = parseFloat(prompt("Informe a segunda nota do aluno: "));

media = (n1 + n2) / 2;

if (media >= 9.0 && media <= 10.0) {
    alert("Sua média foi: " + media + "\nConceito: A\nAPROVADO!");
} else if (media >= 7.5 && media <= 8.9) {
    alert("Sua média foi: " + media + "\nConceito: B\nAPROVADO!");
} else if (media >= 6.0 && media <= 7.4) {
    alert("Sua média foi: " + media + "\nConceito: C\nAPROVADO!");   
} else if (media >= 4.0 && media <= 5.9) {
    alert("Sua média foi: " + media + "\nConceito: D\nREPROVADO!"); 
} else if (media >= 0 && media <= 3.9) {
    alert("Sua média foi: " + media + "\nConceito: E\nREPROVADO!");
} else {
    let res = confirm("Poxa, parece que eu não entendi. Poderia repetir, por favor?");
    if (res == true) {
        location.reload();
    } else {
        document.write("<center>Nota inválida.");
    }
}