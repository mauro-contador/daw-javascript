/*Crea una función llamada analizarNacimiento(fechaNacimiento) que reciba una fecha de nacimiento en formato dd/mm/aaaa y devuelva un objeto con tres propiedades:
- edad: años cumplidos hasta la fecha actual.
- haCumplido: true si la persona ya ha cumplido años este año y false si todavía no.
- anioNacimiento: año en el que nació. */
"use strict"
{
    function analizarNacimiento(fechaNacimiento) {
        let haCumplido;
        let diaMesAño= fechaNacimiento.split("/");
        let dia = diaMesAño[0]; 
        let mes = diaMesAño[1];
        let anio = diaMesAño[2];
        let fechaNac = new Date(anio,mes,dia);
        let hoy = new Date();
        let edad = hoy.getFullYear() - fechaNac.getFullYear();
        let diferenciaMes = hoy.getMonth() - fechaNac.getMonth();
        if(diferenciaMes < 0 || diferenciaMes === 0 && hoy.getDate() < fechaNac.getDate){
            edad--;
            haCumplido = false;
        }else{
            haCumplido = true;
        }
        return{
            edad : edad,
            haCumplido : haCumplido,
            anioNacimiento : anio
        };
    }
    console.log(analizarNacimiento("01/10/2007"))
}