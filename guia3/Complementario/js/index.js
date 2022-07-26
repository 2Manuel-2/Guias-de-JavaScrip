const pantallaValorAnterior = document.getElementById('anterior');
const pantallaValorActual = document.getElementById('actual');
const botonNumeros = document.querySelectorAll('.numero');
const botonOperadores = document.querySelectorAll('.operador');
const Borrar1= document.getElementById('borra1');
const BorrarTodo= document.getElementById('borraTodo');
const BorraIngreso = document.getElementById('BorraIngreso');


const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);

botonNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNum(boton.innerHTML));
});

botonOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.tipoOpe(boton.value));
});

//para no hacer js intrisivo se hace aca el evento onclick para borrar
Borrar1.onclick = function (){
    pantalla.borrar();
}

BorrarTodo.onclick = function (){
    pantalla.BorrarTodo();
}

BorraIngreso.onclick = function (){
    pantalla.BorraIngreso();
}









