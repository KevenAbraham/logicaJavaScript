let dia = parseInt(prompt("Informe o dia da semana em número inteiro:"));

switch (dia) {
    case 1:
        document.write("<center>Olá! Hoje é <b>Domingo</b>!</center>");
    break;
    case 2:
        document.write("<center>Olá! Hoje é <b>Segunda-feira</b>!</center>");
    break;
    case 3:
        document.write("<center>Olá! Hoje é <b>Terça-feira</b>!</center>");
    break;
    case 4:
        document.write("<center>Olá! Hoje é <b>Quarta-feira</b>!</center>");
    break;
    case 5:
        document.write("<center>Olá! Hoje é <b>Quinta-feira</b>!</center>");
    break;
    case 6:
        document.write("<center>Olá! Hoje é <b>Sexta-feira</b>!</center>");
    break;
    case 7:
        document.write("<center>Olá! Hoje é <b>Sábado</b>!</center>");
    break;
    default:
        let res = confirm("Poxa, acho que não entendi. Poderia repetir, por favor?");
        if (res == true) {
            location.reload();
        } else {
            document.write("<center>Não há nada que ver por aqui! Tente novamente mais tarde.")
        }
}