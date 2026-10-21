/*31. Programa una función que dada una fecha válida determine cuantos años han pasado hasta
el día de hoy, pe. miFuncion(new Date(1984,4,23)) o miFuncion (“01/12/2010”)   */
"use strict"
{
function añosPasados(fechaConcreta){

    let fecha = new Date(fechaConcreta);
    let hoy = new Date();
    let diferenciaAño = hoy.getFullYear() - fecha.getFullYear();

    if (hoy.getMonth() < fecha.getMonth()){
        diferenciaAño -- ;
    }
    return diferenciaAño + " años han pasado hasta el dia de hoy"
}
console.log(añosPasados("1995-09-24"));





}