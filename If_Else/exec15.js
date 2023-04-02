let dia = parseInt(prompt("Informe o dia:"));
let mes = parseInt(prompt("Informe o mês:"));
let ano = parseInt(prompt("Informe o ano:"));

if (dia <= 0 || dia >= 32) {
    alert("Data inválida. O dia precista estar entre 1 e 31");
    location.reload();
}

if (mes <= 0 || mes >= 13) {
    alert("Data inválida. O mês precista estar entre 1 e 12");
    location.reload();
}

if (mes == 2) {
    if (dia <= 0 || dia >= 30) {
        alert("Data inválida. Os dias em fevereiro são mais curtos. Tente um dia entre 1 e 29");
        location.reload();
    }
}

if (ano <= 1500 || ano >= 2200) {
    alert("Data inválida. Insira um ano não tão futuro e nem tão passado.")
    location.reload();
}

document.write("<center>Data = " + dia + "/" + mes + "/" + ano);