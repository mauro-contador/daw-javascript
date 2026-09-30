/*  Programa una función que devuelva el monto final después de aplicar un descuento a una
cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */
"use strict"
{
    function conDescuento(num, descuento) {
        let descuento = (precio * descuento) / 100;
        let precioFinal = precio - descuento;

        return precioFinal;
    }
    let precioOriginal = 1000;
    let descuento = 40;

    let resultado = conDescuento(precioOriginal, descuento);
    console.log(resultado);











}