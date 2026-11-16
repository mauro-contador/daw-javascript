"use strict";

{
    let papel = document.querySelector(".papel");
    let papelera = document.querySelector(".papelera");

    papel.addEventListener("dragstart", () => {
        console.log("Arrastrando papel");
    });

    papelera.addEventListener("dragover", (evento) => {
        evento.preventDefault();
    });

    papelera.addEventListener("drop", () => {
        console.log("Papel tirado");

        papelera.src = "./PapeleraLlena.png";

        papel.remove();
    });
}