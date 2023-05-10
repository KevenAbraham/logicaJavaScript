for(i=1; i<=20; i++) {
    document.write("<center>" + i + "<center>");
}

let space = "";

for(j=1; j<=20; j++) {
    space += j + " ";
    document.write("<center>" + space.trim());
}