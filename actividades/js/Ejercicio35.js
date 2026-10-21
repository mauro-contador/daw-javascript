/* 35. Programa una función que dado un array numérico
devuelva otro array con los números elevados al cuadrado. */

"use strict";
{
    function arrayAlCuadrado(array) {
        let nuevoArray = array.map((element) => {
            return element * element;
        });

        return nuevoArray;
    }

    let array = [1, 2, 3, 4, 5, 6];

    console.log(arrayAlCuadrado(array));
}