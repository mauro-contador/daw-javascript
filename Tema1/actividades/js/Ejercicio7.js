"use strict"
{
    // 7. Mostrar todos los números divisores de un número introducido por el usuario.
    let num = Number(prompt("Introduzca un numero: "));
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            console.log("El numero " + i + " es divisor de " + num);
        }
    }
}