paisA = 80000;
paisB = 200000;
document.write("<center>Seja um país A com 80000 habitantes e um país B com 200000 habitantes. Enquanto o país A cresce populacionalmente em um ritmo de 3% e o país B cresce em 1.5% Sabemos que:")

for(i=0; paisA < paisB; i++) {
    paisA = paisA + (paisA * 0.03);
    paisB = paisB + (paisB * 0.015);
}

document.write(`<br><br><center>O país A leverá cerca de <b>${i} anos</b> para ultrapassar a população do país B`);