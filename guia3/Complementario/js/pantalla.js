/*Clase de la pantalla donde se muestran los valores en pantalla*/
class Pantalla {
    constructor(pantallaValorAnterior, pantallaValorActual) {
        this.pantallaValorActual = pantallaValorActual;
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.calculador = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'X',
            dividir: '/',
            modulo: '%',
            raiz: 'sqrt',
            cuadrado: 'cuadrado',
            inve: 'inversa'
        }
        
    }

    //metodo para agregar el nuemroe n la pantalla
    agregarNum(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return//para que no meta mas de 1 punto
        this.valorActual = this.valorActual.toString() + numero.toString();//concatenar los nuemros
        this.imprimir();
    }
    //fin metodo de agreagar

    //para borrar de 1 en 1
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);//se le recorta el ultimo
        this.imprimir();
    }
    //fin metodo de borrar
    
    //metodo para borrarTodo
    BorrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimir();
    }
    //fin metodo borrar todo

    //metodo para borra ultimo ingreso CE
    BorraIngreso(){
        this.valorActual = '';
        this.tipoOperacion = undefined;
        this.imprimir();
    }
    //fin metodo borrar ultimo ingreso

    //metodo para ver el tipo de operador que se usa
    tipoOpe(tipo){
        this.tipoOperacion !== 'igual'  && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual= '';
        this.imprimir();

    }
    //fin de metodo de tipo operador

    //metodo para imprimir
    imprimir() {
        this.pantallaValorActual.textContent = this.valorActual;
        
        this.pantallaValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    //fin metodo de imprimir


    //metodo para calcular ya el proceso como tal
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)){
            return
        }
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
    //fin metodo calcular

    

}
/*Fin clase pantalla */