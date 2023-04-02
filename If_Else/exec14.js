let ano = parseInt(prompt("Informe o ano:"));

if (ano % 4 == 0) {
    if (ano % 100 != 0) {
        document.write("<center>O ano <b>É</b> bissexto.");
    }
} else {
    document.write("<center>O ano <b>NÃO É</b> bissexto.");
}