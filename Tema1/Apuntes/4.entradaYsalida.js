"use strict"
{
    let a = [[1, 2, 3], [4, 5, 6]];// Array bidimensional
    console.log("Hola");
    console.log(a);
    console.table(a);
    console.timeEnd("ya");

    alert("Mensaje" + " que puedo" + "concatenar");
    let otraRespuesta = prompt("¿Como te llamas?");
    console.log(otraRespuesta);
    console.log(typeof otraRespuesta);

    /*
        Si escape --> null
        Si aceptar sin haber escrito nada --> cadena
        Si cancelar --> null
        Si aceptar con datos --> string
        */
    let valorNumerico = parseInt(otraRespuesta);
    if (valorNumerico != NaN) {
        consol.log(valorNumerico);
    }

}