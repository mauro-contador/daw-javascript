"use strict"
{

    //Crear un comentario
    let comentario = document.createComment("Esto es un comentario");
    //Crear un nodo de texto
    let nodoTexto = document.createTextNode("Esto es un nodo de texto");
    //Clonar nodos
    let otroNodoTexto = nodoTexto.cloneNode();//FALSO por defecto
    comentario.isConnected
        ? console.log("está conectado")
        : console.log("no está conectado");

    nodoTexto.isConnected
        ? console.log("está conectado")
        : console.log("no está conectado");

    let nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "nuevo div";

    let nuevoDiv2 = document.createElement("div");
    nuevoDiv2.textContent = "nuevo div 2 ";
    nuevoDiv.append(nuevoDiv2);//meter div dentro de otro
    console.log(nuevoDiv);

    let nuevoDiv3 = nuevoDiv.cloneNode(true);
    console.log(nuevoDiv3);
    nuevoDiv.textContent("otro texto");
    console.log(nuevoDiv);
    console.log(nuevoDiv3);


    let nuevoImg = document.createElement("img");

}