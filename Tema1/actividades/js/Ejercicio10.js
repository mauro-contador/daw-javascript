"use strict"
{
    /**10. Programa una función que determine si un número es primo (aquel que solo es divisible por
    sí mismo y 1) o no, pe. miFuncion(7) devolverá true
     */
    let num;
    do {
        num = Number(prompt("Introduzca un numero: "));
    } while (isNaN(num));

    let resultado = esPrimo(num);
    console.log(resultado);
    function esPrimo(num) {
        let esPrimo = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                esPrimo = false;
            }
        }
        return esPrimo;
    }
}

