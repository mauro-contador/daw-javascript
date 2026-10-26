"use strict"
/* Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.
miFuncion(0,"C") devolverá 32°F */ 
{
    let celsiusToFarenheit = (grados, unidad) => {
        if(unidad === "C") {
            return (grados * 1.8) + 32;
        }else if (unidad === "F"){
            return (grados - 32) / 1.8;
        }
        console.log(convertirGrados(0, "C"));   // 32
        console.log(convertirGrados(32, "F"));  // 0


    }

}