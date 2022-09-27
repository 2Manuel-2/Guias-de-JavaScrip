//Registrar evento click al presionar el botón de envío
function iniciar() {
    var btnenviar = document.getElementById("btnSend");
    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
    if (btnenviar.addEventListener) {
        btnenviar.addEventListener("click", function () {
            var chkvalue, selvalue, nuevoalumno;
            var radiofield = document.frmmat.elements["chkgender"];
            for (var i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue = radiofield[i].value;
                }
            }
            selvalue =
                document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevoalumno = new alumnoUDB(document.frmmat.txtname.value,
                document.frmmat.txtlastname.value, document.frmmat.txtage.value, chkvalue, selvalue);
            nuevoalumno.matricular();
            nuevoalumno.imprimir();
        }, false);
    }
    else {
        btnenviar.attachEvent("onclik", function () {
            var chkvalue, nuevoalumno;
            var radiofield = document.frmmat.elements["chkgender"];
            for (var i = 0; i < radiofield.length; i++) {
                if (radiofield[i].checked) {
                    chkvalue = radiofield[i].value;
                }
            }
            selvalue =
                document.frmmat.seldegree.options[frmmat.seldegree.selectedIndex].value;
            nuevoalumno = new alumnoUDB(document.frmmat.txtname.value,
                document.frmmat.txtlastname.value, document.frmmat.txtage.value, chkvalue, selvalue);
            nuevoalumno.matricular();
            nuevoalumno.imprimir();
        });
    }
}
//Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
function alumnoUDB(nombre, apellido, edad, genero, carrera) {
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.carrera = carrera;
    this.numCarnet = null;
    //Métodos de la clase
    this.matricular = function () {
        var fecha = new Date();
        var year = fecha.getFullYear();
        var day = fecha.getDate();
        var sec = fecha.getSeconds();
        this.numCarnet = this.nombre.substring(0, 1) + this.apellido.substring(0, 1) +
            this.formato(sec) + this.formato(day) + year;
    }
    this.imprimir = function () {
        var info = document.getElementById('infomatricula');
        var informacion = "";
        informacion += "<table class=\"carinfo\">\n<thead>\n\t<tr>\n";
        informacion += "\t\t<th colspan=\"2\">Datos del alumno</th>\n";
        informacion += "\t<tr>\n</thead>\n";
        informacion += "<tbody>\n\t<tr>\n";
        informacion += "\t\t<td>Carnet: </td>\n";
        informacion += "<td>" + this.numCarnet + "</td></tr>\n";
        informacion += "<tr><td>Nombre: </td>\n";
        informacion += "<td>" + this.nombre + " " + this.apellido + "</td></tr>\n";
        informacion += "<tr><td>Edad: </td>\n";
        informacion += "<td>" + this.edad + "</td></tr>\n";
        informacion += "<tr><td>Género: </td>\n";
        informacion += "<td>" + this.genero + "</td></tr>\n";
        informacion += "<tr><td>Carrera: </td>\n";
        informacion += "\t\t<td>" + this.carrera + "</td></tr>\n";
        informacion += "\t</tr>\n</tbody>\n</table>\n";
        info.innerHTML = informacion;
    }
    this.formato = function (valor) {
        if (valor < 10) valor = "0" + valor;
        return valor;
    }
}
//Asociando función que manejará el evento load al cargar la página
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}