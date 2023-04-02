let letra = prompt("Informe a letra para ser lida: ").toUpperCase();

if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    document.write("<center>A letra: <b>" + letra + "</b> É uma vogal!</center>")
} else {
    document.write("<center>A letra: <b>" + letra + "</b> NÃO É uma vogal!</center>")
}