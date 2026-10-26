/* 33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
¡ o ¿*/
"use strict"
{
    function validarNombre(nombre) {
    let expresion = /^[A-Z][a-z]+$/;
        return expresion.test(nombre);
    }
    let nombre1 = "Juan El Churra chica ";
    let nombre2 = "Comepollas";
    console.log(validarNombre(nombre1));
    console.log(validarNombre(nombre2));

}
