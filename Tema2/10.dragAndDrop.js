"use strict";

{
    let cajaRoja = document.querySelector(".cajaRoja");
    let cajaAzul = document.querySelector(".cajaAzul");
    let contenedor = document.querySelector(".contenedor");

    let cajaArrastrada;

    cajaRoja.addEventListener("dragstart", function (evento) {
        cajaArrastrada = evento.target;
        console.log("dragstart roja");
    });

    cajaAzul.addEventListener("dragstart", function (evento) {
        cajaArrastrada = evento.target;
        console.log("dragstart azul");
    });

    contenedor.addEventListener("dragenter", function () {
        console.log("dragenter");
    });

    contenedor.addEventListener("dragleave", function () {
        console.log("dragleave");
    });

    contenedor.addEventListener("dragover", function (evento) {
        evento.preventDefault();
        console.log("dragover");
    });

    contenedor.addEventListener("drop", (evento) => {

        console.log("drop");

        // Mete la caja al principio del contenedor
        contenedor.insertAdjacentElement("afterbegin", cajaArrastrada);

        // Cuando ya están las dos cajas dentro
        if (contenedor.children.length === 2) {

            let miH1 = document.createElement("h1");

            miH1.innerHTML = "Felicidades";

            contenedor.insertAdjacentElement("beforeend", miH1);
        }
    });
}