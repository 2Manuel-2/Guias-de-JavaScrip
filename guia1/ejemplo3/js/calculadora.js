/* * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: calculadora.js *
* Descripción: Realizar operaciones aritméticas básicas.*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//Funcion que funciona como manejador de evento
//al producirse el evento load (carga de la página)

function init(){
    //ingresar los datos de los numeros a operar
    var op1=prompt('Introduzca el primer numero:','');
    var op2=prompt('Ingrese el segundo numero:','');
    //elemento div donde se mostrara el menu de las operaciones
    var operaciones=document.getElementById('operaciones');
    //Elemento div donde se mostraran los resultados
    var resultado=document.getElementById('resultado');
    //creando el contenido de la pagina
    var contenido="<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Sumar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Restar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Multiplicar</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Dividir</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Residuo</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";
    operaciones.innerHTML=contenido;
    //preparando el manejo del evento clic sobre los enlaces del menu
    var opciones=document.getElementsByTagName('a');
    //recorrer todos los elementos de enlace (elementos a)
    //y asignar el manejador del evento clic
    for(var i=0; i<opciones.length; i++){
        switch(i){
            case 0:
                //funcion sumar
                opciones[i].onclick=function(){
                    resultado.innerHTML="<p class=\"letterpress\">" +op1+"+"+op2+"="+
                    (parseFloat(op1)+parseFloat(op2))+"<\p>\n";
                }
            break;
            case 1:
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " - " + op2 +
                    " = " + (op1 - op2) + "</p>\n"; 
                }
            break;
            case 2:
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " * " + op2 +
                    " = " + (op1 * op2) + "</p>\n";
                }
            break; 
            case 3:
                opciones[i].onclick = function(){
                if(op2 == 0){
                    resultado.innerHTML = "<p class=\"letterpress\">No se puede dividir entre cero </p>\n";
                }
                else {

                    resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " / " +
                    op2 + " = " + Math.round((op1 / op2) * 100) / 100 + "</p>\n";
                }
                }
            break;
            case 4:
            opciones[i].onclick = function(){
                if(op2 == 0){
                resultado.innerHTML = "<p class=\"letterpress\">No se ha podido obtener el residuo, por división entre cero.</p>\n";
                }
                else{
                resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " % " +
                op2 + " = " + (op1 % op2) + "</p>\n";
                }
            }
            break;     
        } 
    }
}
window.onload=init;
