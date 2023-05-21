// esse exercicio foi realizado por meio de uma consulta ao chat gpt. na minha tentativa, o exercicio excedeu 150 linhas, então fui verificr qual resposta o chat gpt me fornecia. tendo isso em vista, decidi tentar entender o uso das funções e aplicá-las nesse exercicio

function obterGabarito() { // aqui é aonde o professor irá implementar as respostas da prova
    let gabarito = []; // array basico para pegar todas as respota certas na ordem
    for(i = 1; i <= 10; i++) { 
        let resposta = prompt("Informe o gabarito da " + i + "° Questão.");
        gabarito.push(resposta.toUpperCase()); // aqui eu to jogando as respostas dentro do array com upper case
    }

    return gabarito; //retornando o gabarito
} // função está pronta para uso

function verificarResposta(gabarito, respostaAluno) { //aqui estou indicando que utilizarei duas variaveis de outra função
    let acertos = 0;
    for(i = 1; i <= gabarito.length; i++) { //enquanto i for menor que a quantidade de coisas no gabarito
        if(respostaAluno[i] === gabarito[i]) { // comparando com as variaveis de outra função 
            acertos++;
        }
    }
    return acertos; // no fim, a função toda é armazenada dentro de acertos
}

// função principal
function main() { 
    let gabarito = obterGabarito(); //armazena a função em uma variavel
    let maiorAcerto = 0;
    let menorAcerto = Infinity; //autoexplicativo
    let totalAlunos = 0;
    let somaNotas = 0;

    while (true) { //enquanto for verdadeiro
        let respostaAluno = [];
        for (let i = 1; i <= 10; i++) {
          let resposta = prompt(`Informe a resposta do aluno para a questão ${i}:`);
          respostaAluno.push(resposta.toUpperCase()); //mesma coisa do gabarito
        }

        let acertos = verificarResposta(gabarito, respostaAluno); //puxa os dados da função

        if (acertos > maiorAcerto) { //calculando o maior acerto
            maiorAcerto = acertos;
        }

        if (acertos < menorAcerto) { //calculando o menor acerto
            menorAcerto = acertos;
        }

        totalAlunos++;
        somaNotas += acertos;

        let continuar = prompt("Outro aluno vai utilizar o sistema? (S/N):"); //com isso, veremos se irá cadastrar mais notas ou nao, caso nao cadastre, o programa ira encerrar
        if (continuar.toUpperCase() != "S") {
            break;
        }
    }

    let mediaNotas = somaNotas / totalAlunos;

    document.write("<center>Resultado:<br>");
    document.write("<center>Maior Acerto:" + maiorAcerto + "</br>");
    document.write("<center>Menor Acerto:" + menorAcerto + "</br>");
    document.write("<center>Total de Alunos:" + totalAlunos + "</br>");
    document.write("<center>Média das Notas:" + mediaNotas + "</br>");
    document.write("<center>Gabarito da Prova:" + gabarito + "</br>");
}

main();