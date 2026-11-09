// Realiza un programa que cuando se pulse un boton con el texto "Nuevo número",
//añada un elemento con un número aleatorio a una lista desordenada(elemento UL)
"use strict"
let boton = document.getElementById("boton");
let lista = document.getElementById("lista");
{
    boton.addEventListener("click", function (evento) {
            let numeroAleatorio = Math.floor(Math.random()*10)+1;
            let li = document.createElement("li");
            li.textContent = numeroAleatorio;
            lista.append(li);
    })
}    
