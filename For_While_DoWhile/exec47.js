let N = parseInt(prompt("Informe a quantidade de termos (N):"));
let H = 0;

for (let i = 1; i <= N; i++) {
  H += 1 / i;
}

document.write("<center>Soma dos termos:" + H.toFixed(2));