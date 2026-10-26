"use strict"
{
    console.log(Math.PI);
    console.log(Math.E);

    let f = -37.8;
    Math.floor(f); // Redondea al más pequeño
    Math.ceil(f); // Redondea al mas grande
    Math.round(f); // Redondea a partir del 0,5
    console.log(Math.abs(f));                  // Valor absoluto
    console.log(Math.min(10, 7, 14, 21));     // Devuelve el menor
    console.log(Math.max(10, 7, 14, 21));     // Devuelve el mayor
    console.log(Math.pow(2, 4));               // Potencia: 2⁴
    console.log(Math.sqrt(121));               // Raíz cuadrada

    console.log(Math.random());                // Aleatorio entre 0 y 1
    console.log(Math.random() * 10);           // Aleatorio entre 0 y <10

    console.log(Math.round(Math.random() * 10)); // Redondea: aleatorio entre 0 y 10

    console.log(Math.floor(Math.random() * 10)); // Redondea hacia abajo: entre 0 y 9

    console.log(Math.ceil(Math.random() * 10));  // Redondea hacia arriba: entre 1 y 10

    console.log(10+Math.random ()*(100 -10)); // entre 10<=  y <100

    console.log(Math.ceil(10+Math.random ()*(100 -10))); // entre 10<=  y <=100



}