let num = 0;
let perg1 = prompt("Responda com [S/N]\nVocê telefonou para a vítima?").toLowerCase();
let perg2 = prompt("Responda com [S/N]\nVocê esteve no local do crime?").toLowerCase();
let perg3 = prompt("Responda com [S/N]\nVocê mora perto da vítima?").toLowerCase();
let perg4 = prompt("Responda com [S/N]\nVocê devia para a vítima?").toLowerCase();
let perg5 = prompt("Responda com [S/N]\nVocê já trabalhou com a vítima?").toLowerCase();

if (perg1 == "s") {
    num++;
}

if (perg2 == "s") {
    num++;
}

if (perg3 == "s") {
    num++;
}

if (perg4 == "s") {
    num++;
}

if (perg5 == "s") {
    num++;
}

switch (num) {
    case 1:
        document.write("<center>Você possui " + num + " envolvimento no crime, portanto é <b>INOCENTE</b>!");
    break;
    case 2:
        document.write("<center>Você possui " + num + " envolvimentos no crime, portanto é <b>SUSPEITO</b>!");
    break;
    case 3:
        document.write("<center>Você possui " + num + " envolvimentos no crime, portanto é <b>CÚMPLICE</b>!");
    break;
    case 4:
        document.write("<center>Você possui " + num + " envolvimentos no crime, portanto é <b>CÚMPLICE</b>!");
    break;
    case 5:
        document.write("<center>Você possui " + num + " envolvimentos no crime, portanto é o(a) <b>ASSASSINO(A)</b>!");
    break;
    default:
        let res = confirm("Ops! Parece que o comando que você inseriu está com o valor errado. Poderia informar novamente?");
        if (res == true) {
            location.reload();
        } else {
            document.write("<center>Não há nada que ver por aqui...");
        }
    break;
}