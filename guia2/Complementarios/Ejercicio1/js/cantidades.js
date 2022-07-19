var num, i, j, k, l, cons, conti, contp, contt, total, impar, par, menor, mayor;

do{
    num = prompt("Ingrese un numero entero: ");
if (num <0)
    alert("Ingrese un numero mayor a cero");
}while(num<0);
cons = num.split('');
par=0;
impar=0;
k=0;
j=0;
conti=0;
contp=0;
total=0;
contt=0;
mayor=0;
menor=10;
for(i=0; i <= cons.length; i++){
if(cons[i] % 2 == 0){
    contp = parseInt(cons[i]);
    par = par + contp;
    k++;
}else if(cons[i] % 2 == 1){
    conti = parseInt(cons[i]);
    impar = impar + conti;
    j++
}

if(contt=cons[i]){
contt = parseInt(cons[i]);
total = total + contt;
}
if(cons[i]>=mayor){
    mayor=cons[i];
     
}else if(cons[i]<=menor ){
    menor=cons[i]
}
if(contt=contt){
    menor=contt;
}
}
i=i-1


document.write("<h1>cantidad de cifras: "+i+"</h1>");
document.write("<h1>cantidad de cifras impares: "+j+"</h1>");
document.write("<h1>cantidad de cifras pares: "+k+"</h1>");
document.write("<h1>suma de cifras impares: "+impar+"</h1>");
document.write("<h1>suma de cifras pares: "+par+"</h1>")
document.write("<h1>suma de todas las cifras: "+total+" </h1>")
document.write("<h1>cifra mayor: "+mayor+" </h1>")
document.write("<h1>cifra menor: "+menor+" </h1>")


 