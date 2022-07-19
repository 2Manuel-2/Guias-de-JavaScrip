var num1=prompt("Conversion de metros a pies, por favor digite un numero: ");
const Pie=3.2808;//constante de pie
var resul= num1*Pie;
var resul2 = resul.toFixed(2);
document.write("<h1>Los metros a convertir son: "+num1+"</h1>");
document.write("<h1>La conversion de metros a pies es: " + resul2 + "</h1>");