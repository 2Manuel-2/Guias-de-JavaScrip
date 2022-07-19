var num1=prompt("Conversion de grados celcius a grados Fahrenheit:");
const num2=1.800;
const num3=32.00;
var resultado= num1*num2+num3;
var resultado2 = resultado.toFixed(2);

document.write("<h1>Los grados celicus a convertir son: "+num1+"</h1>");
document.write("<h1>La conversion de grados celcius a fahrenheit es: " + resultado2 + "</h1>");