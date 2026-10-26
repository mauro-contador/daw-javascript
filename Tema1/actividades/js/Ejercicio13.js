/* rograma una función que calcule el factorial de un número (El factorial de un entero positivo
n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.
miFuncion(5) devolverá 120 */
"use strict"
{
    function factorial(num) {
        let res = 1;

        for (let i = num; i > 0; i--) {
            res = res * i;
        }

        return res;
    }

    let num = Number(prompt("Introduce un número para aplicar el factorial"));

    console.log(`El factorial de ${num} es ${factorial(num)}`);
}