//arreglos para guardar los datos
var producto = new Array(100);
var precio = new Array(100);


//banderas
var bandera = false;
var bandera1 = false;
var bandera2 = false;
var bandera3 = false;

//contador
var i = 0;
var canProducto = 1;

//seleccion;
var seleccion;

for(i = 0; i <= 100; i++){
do
{
    do{

    
if(!(producto[i] =  prompt("Ingrese el nombre del producto"))){
  alert("ERROR... dato vacio");
}else{
    if(isNaN(producto[i])){
        bandera3 = true;
        do{
            if(!(precio[i] = prompt("Ingrese el precio del producto"))){
                alert("ERROR... dato vacio");
            }else{
            if(isNaN(precio[i])){
               alert("ERROR... dato no valido");
            }else{
                bandera1 = true;
              
            }
            }
        }while(bandera1 == false);
    }else{
        alert("ERROR... dato no valido");

    }
   
}
    }while(bandera3 == false);

do{
    seleccion = prompt("Digite 1 si desea ingresar mas productos, Ingrese 2 si ya no desea ingresar productos");
    switch(seleccion){
        case '1':
            bandera2 = true;
            bandera = true;
            canProducto ++;
            break;
        case '2':
            i = 100;
            bandera2 = true;
            bandera = true;
            break;
        default:
            alert("ERROR... dato no valido");
            bandera2 = false;
            break;
    }
}while(bandera2 == false);



}while(bandera == false);
}

document.write("<table border = '2'> <tr> <th>Nombre</th> <th>Precio</th>  </tr>");

for(i = 0; i <canProducto; i++){
    document.write("<tr>  <td>"+ producto[i] +"</td>   <td>"+precio[i]+"</td></tr>");
}

document.write("</table>");

