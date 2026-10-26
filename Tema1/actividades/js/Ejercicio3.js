"use strict"
{
    //3. Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.
    let horas = Number(prompt("Introduce la hora"));
    let minutos = Number(prompt("Introduce los minutos"));
    let segundos = Number(prompt("Introduce los segundos"));

    console.log("Tu hora es " + horas + ":" + minutos + ":" + segundos);
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos >= 60) {
        minutos = 0;
        horas++;
    }

    if (horas >= 24) {
        horas = 0;
    }

    console.log(horas + ":" + minutos + ":" + segundos);
}