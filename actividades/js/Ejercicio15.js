//indicar si un NIF es válido o no
"use strict"
{
    let validarNIF = (nif) => {
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE"
        let numero = parseInt(nif.substring(0, 8));
        let letra = nif.charAt(8).toUpperCase();

        return letras[numero % 23] == letra ? "Válido" : "No Válido";
    };
    console.log(validarNIF("12345678Z"));
    console.log(validarNIF("12345678A"));
}