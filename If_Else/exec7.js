let turno = prompt("Informe o turno que você estudas: [M/V/N]").toUpperCase();

switch (turno) {
    case "M":
        document.write("<center>Olá! O seu turno é o da <b>MANHÃ</b>, logo o turno <b>MATUTINO</b></center>");
    break;
    case "V":
        document.write("<center>Olá! O seu turno é o da <b>TARDE</b>, logo o turno <b>VESPERTINO</b></center>");
    break;
    case "N":
        document.write("<center>Olá! O seu turno é o da <b>NOITE</b>, logo o turno <b>NOTURNO</b></center>");
    break;
    default:
        let res = confirm("Poxa, parece que eu não consegui entender. Tente mais uma vez!");
        if (res == true) {
            location.reload();
        }
}