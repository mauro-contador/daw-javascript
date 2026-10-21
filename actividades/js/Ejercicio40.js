/*40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en
este formato dd/mm/aaa. */
"use strict"
{
function formatearEdad(dia,mes,año) {
    let fecha = new Date(dia,mes,año);
    return fecha;
}

let dia1 = 21;
let mes1 = 12;
let año1 = 2001;

console.log(formatearEdad(dia1,mes1,año1));
}