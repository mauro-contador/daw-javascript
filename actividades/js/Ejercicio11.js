"use strict"
// Programa una función que determine si un número es par o impar, pe. miFuncion(29)
// devolverá Impar
{
    let parImpar = (n) => {
        if (n === 0) {
            console.log("PAR");
        } else if (n === 1) {
            console.log("IMPAR");
        } else {
            parImpar(n - 2);
        }

    }
     x = prompt("introduce un numero");
    parImpar(x);
}
