/*clase de la calculadora*/
class Calculadora{
    sumar(num1, num2){
        return num1 + num2;
    }

    restar(num1, num2){
        return num1 - num2;
    }

    multiplicar(num1, num2){
        return num1 * num2;
    }

    dividir(num1, num2){
        return num1 / num2;
    }

    modulo(num1, num2){
        return (num1) % (num2);
    }

    raiz(num1, num2){
        num2=num1;
        return Math.sqrt(num1);
    }

    cuadrado(num1, num2){
        num2=num1;
        return Math.pow(num1,2);
    }

    inve(num1){
        return (num1* (1/num1));
    }
}
/*Fin de clase calculadora */