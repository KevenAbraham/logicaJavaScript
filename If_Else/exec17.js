let num = parseInt(prompt("Informe um número:"));

if (num >= 100) {
    centena = Math.floor(num / 100);
    dezena = Math.floor((num % 100) / 10);
    unidade = (num % 100) % 10;
    
    if (centena >= 0 && centena <= 1) {
        centenaTxt = "centena";
    } else {
        centenaTxt = "centenas";
    }

    if (dezena >= 0 && dezena <= 1) {
        dezenaTxt = "dezena";
    } else {
        dezenaTxt = "dezenas";
    }

    if (unidade >= 0 && unidade <= 1) {
        unidadeTxt = "unidade";
    } else {
        unidadeTxt = "unidades";
    }

    document.write("<center>" + centena + " " + centenaTxt + ", " + dezena + " " + dezenaTxt + " e " + unidade + " " + unidadeTxt);
} else if (num <= 99) {
    centena = Math.floor(num / 100);
    dezena = Math.floor((num % 100) / 10);
    unidade = (num % 100) % 10;

    if (dezena >= 0 && dezena <= 1) {
        dezenaTxt = "dezena";
    } else {
        dezenaTxt = "dezenas";
    }

    if (unidade >= 0 && unidade <= 1) {
        unidadeTxt = "unidade";
    } else {
        unidadeTxt = "unidades";
    }

    document.write("<center>" + dezena + " " + dezenaTxt + " e " + unidade + " " + unidadeTxt);
} else if (num <= 9) {
    centena = Math.floor(num / 100);
    dezena = Math.floor((num % 100) / 10);
    unidade = (num % 100) % 10;

    if (unidade >= 0 && unidade <= 1) {
        unidadeTxt = "unidade";
    } else {
        unidadeTxt = "unidades";
    }

    document.write("<center>" + unidade + " " + dezenaTxt);
}