//vgariables y arreglos
var producto = [];
var precio = [];

var contP=0, contP2=0, opt=false; //contP es para producto y P2 es suma total

//Mostrar las instrucciones para responder
document.write("<h1 align='center'>Calcular total de venta</h1><hr>");
document.write("<b>Digite El nombre del producto</b><br>");
document.write("<b>Digite el Precio del producto</b><br>");

//Ciclo repetitivo infinito donde se captura voto por voto
//en tanto no se de por terminada el ingreso de respuesta de la encuesta


do{
    producto[contP]=prompt('¿Cual es el nombre del producto?', '');
    
    do{
        precio[contP]=parseFloat(prompt('¿Cual es el Precio del producto?', ''));

    if(isNaN(precio[contP])){
        alert("Debe ser un valor numerio");
    }else{
        opt=true;
    }
    }while(opt!=true);
    contP++;
    //Se pregunta si se desea terminar la encuesta o continuar
    opcion = confirm('¿Desea continuar s/n?');
}while(opcion==true);

document.write("<table class=\"zui-table zui-table-rounded\">");
        document.write("<thead>");
        document.write("<tr><th>Nombre del producto</th>");
        document.write("<th>Precio</th></tr>");
        document.write("</thead>");
        document.write("<tbody>");
for(i=0; i<contP;i++){
        document.write("<tr><td>"+ producto[i] + " </td><td class=\"number\">" + precio[i] + "</td>");
       /* document.write("<td class=\"number\">" + per1*100 + " %</td></tr>");
        document.write("<tr><td>Votos en contra </td><td class=\"number\">" + cont2 + "</td>");
        document.write("<td class=\"number\">" + per2*100 + " %</td></tr>");
        document.write("<tr><td>Se abstienen de opinar </td><td class=\"number\">" + cont3 + "</td>");
        document.write("<td class=\"number\">" + per3*100 + " %</td></tr>");*/
        
    
}

for(i=0; i<contP;i++){
    contP2 = contP2 + precio[i];
}

document.write("</tbody>");
        document.write("<tfoot>");
        document.write("<tr><th>Totales</th>");
        document.write("<th class=\"number\">" + contP2 +"</th>");
        document.write("</tfoot>");
        document.write("</table>");


