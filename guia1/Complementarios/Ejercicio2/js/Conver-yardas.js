var num1=prompt("Conversion de metros a yardas, por favor digite un numero:");
const yarda=1.09361;//constante yardasd
var resul= num1*yarda;
var resul2 = resul.toFixed(2);
document.write("<h1>Los metros a convertir son: "+num1+"</h1>");
document.write("<h1>La conversion de metros a yardas es: " + resul2 + "</h1>");