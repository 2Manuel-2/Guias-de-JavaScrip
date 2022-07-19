var cifras;
//contadores
var cImpares = 0;//santidad
var cPares = 0;//cantidad
var sPares = 0;//suma
var sImpares = 0;//suma
var sCifras = 0;

var prueba=0;

//declaramos una bandera que esta nos servira para el ciclo do while, y tambien para el desarrollo del ejercicio
var bandera = false;

do{
    var nume = prompt("Porfavor digite un numero entero: ","");
    if(isNaN(nume)){
        alert("Digite un dato valido.");
    }else{

        cifras = nume.length ;
        document.write("<h3> El numero tiene: "+cifras+" cifras </h3>");


        for(i = 0; i<cifras; i++){
            prueba=nume.length-i;
            if(prueba% 2 == 0){
                cPares= cPares+1;
                bandera=true;
                sPares= sPares + nume.length-i;
            }else{
                cImpares= cImpares+1;
                bandera=true;
                sImpares= sImpares + nume.length-i;
            }
        }


    }

        document.write("<h3> Cantidad de cifras impares: "+cImpares+"</h3>");
          document.write("<h3> Cantidad de cifras pares: "+cPares+"</h3>");
          document.write("<h3> La suma de cifras impares: "+sImpares+"</h3>");
          document.write("<h3> La suma de cifras pares: "+sPares+"</h3>");
          bandera=true;

}while(bandera==false)




