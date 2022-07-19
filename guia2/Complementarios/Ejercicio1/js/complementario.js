var num, cifras;

//contadores
var i;

//contador de cantidades de cifras impares
var canImpares = 0;
//contador de cantidades de cifras pares
var canPares = 0;

//contador de suma de pares
var sumPares = 0;
//contador de sumas impares
var sumImpares = 0;
//varaible suma todos los numeros
var sumCifras = 0;

//banderas
var bandera = false;

do{


num = prompt("Ingrese un numero entero");

if(!(num)){
    alert("ERROR... varaible vacia");
}else{
    if(isNaN(num) || (num % 1 != 0)){
        alert("ERROR... dato no valido");
    }else{
      if(num >  0){
        cifras = num.length ;
        document.write("<h1> Cantidad de cifras que tiene el numero: "+cifras+"</h1>");

        for(i = num; i > 0; i--){
            sumCifras += i * 1;
            if(i % 2 == 0){
                canPares++;
                sumPares += i * 1;
            }else{
                canImpares++;
                sumImpares += i * 1;
            }
        }
          document.write("<h1> Cantidad de cifras impares: "+canImpares+"</h1>");
          document.write("<h1> Cantidad de cifras pares: "+canPares+"</h1>");
          document.write("<h1> La suma de cifras impares: "+sumImpares+"</h1>");
          document.write("<h1> La suma de cifras pares: "+sumPares+"</h1>");
          document.write("<h1> La suma de todas las cifras: "+sumCifras+"</h1>");
        if(sumPares > sumImpares){
            document.write("<h1> La cifra mayor son los pares: "+sumPares+"</h1>");
            document.write("<h1> La cifra Menor son los impares: "+sumImpares+"</h1>");
            bandera = true;
        }else{
            document.write("<h1> La cifra mayor son los Impares: "+sumImpares+"</h1>");
            document.write("<h1> La cifra Menor son los pares: "+sumPares+"</h1>");
            bandera = true;
        }

      }else if(num < 0){
        cifras = num.length - 1;
        document.write("<h1> Cantidad de cifras que tiene el numero "+cifras+"</h1>");
        for(i = num; i < 0; i++){
            sumCifras += i * 1;
            if(i % 2 == 0){
                canPares++;
                sumPares += i * 1;
            }else{
                canImpares++;
                sumImpares += i * 1;
            }
        }
          document.write("<h1> Cantidad de cifras impares: "+canImpares+"</h1>");
          document.write("<h1> Cantidad de cifras pares: "+canPares+"</h1>");
          document.write("<h1> La suma de cifras impares: "+sumImpares+"</h1>");
          document.write("<h1> La suma de cifras pares: "+sumPares+"</h1>");
          document.write("<h1> La suma de todas las cifras: "+sumCifras+"</h1>");
        if(sumPares > sumImpares){
            document.write("<h1> La cifra mayor son los pares: "+sumPares+"</h1>");
            document.write("<h1> La cifra Menor son los impares: "+sumImpares+"</h1>");
            bandera = true;
        }else{
            document.write("<h1> La cifra mayor son los Impares: "+sumImpares+"</h1>");
            document.write("<h1> La cifra Menor son los pares: "+sumPares+"</h1>");
            bandera = true;
        }

      }else{

        document.write("<h1> Cantidad de cifras que tiene el numero 0</h1>");
        document.write("<h1> Cantidad de cifras impares: 0</h1>");
        document.write("<h1> Cantidad de cifras pares: 0</h1>");
        document.write("<h1> La suma de cifras impares: 0</h1>");
        document.write("<h1> La suma de cifras pares: 0</h1>");
        document.write("<h1> La suma de todas las cifras: 0</h1>");
        document.write("<h1> No hay cifra mayor ni menor</h1>");
        bandera = true;

        

      }
    }
}
}while(bandera == false);