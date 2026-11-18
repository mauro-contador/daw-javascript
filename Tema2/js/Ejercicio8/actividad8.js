/*8. Realiza un programa que al hacer doble click en la pantalla del navegador, cambie el
fondo a un color aleatorio.*/
"use strict";


    document.addEventListener("dblclick", () => {

        let rojo = Math.floor(Math.random() * 255);
        let verde = Math.floor(Math.random() * 255);
        let azul = Math.floor(Math.random() * 255);

        document.body.style.backgroundColor =`rgb(${rojo},${verde},${azul})`;
    });
