function iniciar(){
    //Inicializacion de variables
    var numeros = new Array();
    var i, max, temp, contenido="", tdelement;
    var orden;
    var tipOrden=0;

    do{
        orden = prompt("¿Como desea ordenar los numeros? (ascendente o desendente) escribir de esa manera: ", "");
        if(orden=='ascendente' || orden=='desendente'){
            if(orden=='ascendente'){
                tipOrden=1; 
                continue;
            }else{
                tipOrden=2;
                continue;
            }
        }else{
            alert("Debe digitar uno de los dops metodos y de la manera en que se especifica");
        }

    }while(tipOrden==0);

    do{
        max = prompt("cuantos numeros va a ingresar (valor entero):", "");
        //verificar que se ingrese un dato numerico
        if(isNaN(max)){
            alert("El valor digitado no es numerico.");
            continue;
        }
        //verificar que el valor ingresado sea mayor o igual que 2
        if(max < 2){
            alert("El arreglo debe ser de dimencion 2 o superior");
        }
    }while(isNaN(max) || max <2);

    //lazo para solicitar el ingreso de elementos del arreglo
    for(i=0; i<max; i++){
        numeros[i] = parseInt(prompt("Numero " + (parseInt(i) + 1 ), ""));
    }

    with(document){
        contenido += "<h1>Números ingresados</h1>\n";
        //Lazo para ingresar los elementos ingresados en el arreglo
        contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
        //Lazo que muestra los elementos del arreglo en una tabla
        for(i=0; i<max; i++ ){
            contenido +="\t\t\t<td class=\"off\">" + numeros[i] + "</td>\n";
        }
        contenido += "\t\t</tr>\n\t</tbody>\n</table>\n<br />\n\n";
        //Lazo que ordena el arreglo mediante el método de la burbuja
        if(tipOrden==1){//ascendente
            for(i=0; i<max-1; i++){
                for(j=i+1; j<max; j++){
                    if(numeros[i]>numeros[j]){
                        temp =numeros[j];
                        numeros[j] = numeros[i];
                        numeros[i] = temp;
                    }
                }
            }
        }else{//desendente
            for(i=0; i<max-1; i++){
                for(j=i+1; j<max; j++){
                    if(numeros[i]<numeros[j]){
                        temp =numeros[j];
                        numeros[j] = numeros[i];
                        numeros[i] = temp;
                    }
                }
            }
        }
        if(tipOrden==1){
            contenido += "<h1>Números ordenados ascendentemente</h1>\n";
        }else{
            contenido += "<h1>Números ordenados desendente</h1>\n";
        }
        
    contenido += "<table>\n\t<tbody>\n\t\t<tr>\n";
    //Lazo que muestra los elementos del arreglo que han sido ordenados con el método de la burbuja
    for(i=0; i<max; i++) {
        contenido += "\t\t\t<td class=\"Off\">" + numeros[i] + "</td>\n";
    }
    contenido += "\t\t</tr>\n\t</tbody>\n</table>\n";
    }//fin with document

    datos.innerHTML = contenido;
    //Capturando los elemento con clase Off
    tdelement = document.getElementsByClassName('Off');
    alert(tdelement.length);

    for(var i=0; i<tdelement.length; i++){
        tdelement[i].onmouseover = function(){
        this.className = 'On';
        }
        tdelement[i].onmouseout = function(){
            this.className = 'Off';
            }
        }


}

window.onload = iniciar;