"use strict"
{
    function calcularEdad(fechaNacimiento){
        if(!fechaNacimiento) return "Debes introducir una fecha de nacimeinto";

        let fechaNac = new Date(fechaNacimiento);

        let hoy = new Date();

        let edad = hoy.getFullYear - fechaNac.getFullYear; 

        let diferenciaMes = hoy.getMonth - fechaNac.getMonth;


        if (diferenciaMes < 0 || diferenciaMes === 0 && hoy.getDate < fechaNac.getDate){
            edad--;
        }

        return edad + " años."
    }
    console.log(calcularEdad("1995-10-25"));
}