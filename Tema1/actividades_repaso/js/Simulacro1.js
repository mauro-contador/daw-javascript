"use strict";
{
    let numeros = [8, 3, 3, -7, 2, 9, 11, 1];
    let arrayNuevo = [];

    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let esPrimo = true;

        // Los números menores que 2 no son primos
        if (numero < 2) {
            esPrimo = false;
        }

        // Comprobamos si el número tiene divisores
        for (let j = 2; j <= Math.sqrt(numero); j++) {
            if (numero % j === 0) {
                esPrimo = false;
                break;
            }
        }

        // Guardamos el número si es primo
        if (esPrimo) {
            arrayNuevo.push(numero);
        }
    }

    // Eliminamos duplicados
    let sinDuplicados = [...new Set(arrayNuevo)];

    // Ordenamos de menor a mayor
    sinDuplicados.sort((a, b) => a - b);

    console.log(sinDuplicados);
}