"use strict";

{
    // Creamos los 3 párrafos
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    p1.textContent = "Primer párrafo";
    p2.textContent = "Segundo párrafo";
    p3.textContent = "Tercer párrafo";

    // Los añadimos al body
    document.body.append(p1);
    document.body.append(p2);
    document.body.append(p3);

    // Guardamos los párrafos en un array para recorrerlos fácilmente
    let parrafos = [p1, p2, p3];

    parrafos.forEach(parrafo => {

        // Cuando el ratón sale del párrafo, se oculta
        parrafo.addEventListener("mouseleave", () => {
            parrafo.style.display = "none";
        });

        // Con doble clic se elimina del DOM
        parrafo.addEventListener("dblclick", () => {
            parrafo.remove();
        });
    });

    // Creamos el botón desde JavaScript
    let boton = document.createElement("button");
    boton.textContent = "Reaparecer";

    document.body.append(boton);

    // Al pulsar el botón mostramos los párrafos que sigan existiendo
    boton.addEventListener("click", () => {

        parrafos.forEach(parrafo => {

            // isConnected comprueba si sigue dentro del DOM
            if (parrafo.isConnected) {
                parrafo.style.display = "";
            }
        });
    });
}