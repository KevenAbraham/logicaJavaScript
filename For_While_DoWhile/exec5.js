paisA = parseInt(prompt("Informe a população do País A:"));
percA = parseFloat(prompt("Informe a taxa de crescimento do país (%)"));
paisB = parseInt(prompt("Informe a população do País B:"));
percB = parseFloat(prompt("Informe a taxa de crescimento do país (%)"));

if (paisA > paisB) {
    for(i=0; paisB < paisA; i++) {
        paisB = paisB + (paisB * (percB/100));
        paisA = paisA + (paisA * (percA/100));
    }
    document.write("<center>O país B levará cerca de <b>" + i + " anos </b> para ultrapassar o país A em população.");
} else {
    for(i=0; paisA < paisB; i++) {
        paisA = paisA + (paisA * (percA/100));
        paisB = paisB + (paisB * (percB/100));
    }
    document.write("<center>O país A levará cerca de <b>" + i + " anos </b> para ultrapassar o país B em população.");
}