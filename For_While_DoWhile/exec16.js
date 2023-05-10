a = 0;
b = 1;
document.write("<center>" + a);
document.write("<center>" + b);


for(i=1; i <= 500; i++) {
    c = a + b;
    a = b;
    b = c;
    document.write("<center>" + c);
}



