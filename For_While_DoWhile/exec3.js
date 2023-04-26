let nome = prompt("Informe o seu nome:");
while (nome.length <= 3) {
    nome = prompt("O seu nome precisa ser mais que 3 caracteres. Por favor, insira-o corretamente:");
}

let idade = prompt("Informe a sua idade:");
while (idade < 0 || idade > 150) {
    idade = prompt("A sua idade não está de acordo. Por favor, informe-a corretamente:");
}

let salario = parseFloat(prompt("Informe a quantidade do seu salário: R$"));
while (salario < 0) {
    salario = parseFloat(prompt("Informe o seu salário corretamente:"));
}

let sexo = prompt("Informe o seu sexo: [F/M]");
while (sexo.toUpperCase() !== "F" && sexo.toUpperCase() !== "M") {
    sexo = prompt("Informe o seu sexo corretamente.");    
}

let estadoCivil = prompt("Informe o seu estado civil: \nS - solteiro(a)\nC - casado(a)\nV - Viúvo(a)\nD - Divorciado(a)").toUpperCase();
while (estadoCivil != "S" && estadoCivil != "C" && estadoCivil != "V" && estadoCivil != "D") {
    prompt("Informe o seu estado civil corretamente: \nS - solteiro(a)\nC - casado(a)\nV - Viúvo(a)\nD - Divorciado(a)").toUpperCase();
}

document.write(`<center>O seu nome é: ${nome}<br>Você tem ${idade}<br>Recebe um salário de R$${salario}<br>Você é do sexo: ${sexo}<br>Seu estado civil: é ${estadoCivil}`);