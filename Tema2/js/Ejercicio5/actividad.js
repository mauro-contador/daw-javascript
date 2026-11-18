"use strict";

{
    let posicion = document.querySelector("#posicion");

    document.addEventListener("mousemove", (evento) => {

        posicion.textContent =
            "Posición X: " + evento.clientX +
            " | Posición Y: " + evento.clientY;
    });
}