"use strict"
{
    let nuevoDiv = document.createElement("div");
    nuevoDiv.id = "id1";
    nuevoDiv.className = "cDiv1";
    nuevoDiv.style = "color: red";
    nuevoDiv.className = "cDiv2";
    console.log(nuevoDiv);
    // nuevoDiv.className += "cDiv2";
    nuevoDiv.classList.add("cDiv2");
    console.log(nuevoDiv);

    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.setAttribute("id", "idP"); // nuevoParrafo.id = "idP"
    nuevoParrafo.setAttribute("name", "nP"); // nuevoParrafo.name = "nP"
    nuevoParrafo.setAttribute("class", "cP");
    nuevoParrafo.setAttribute("kk", "grande");
    console.log(nuevoParrafo.hasAttribute("id"));
    console.log(nuevoParrafo.hasAttribute("style"));
    let nombreAtributos = nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);
    nuevoParrafo.setAttribute("style", "color: red");
    console.log(nuevoParrafo);
    nuevoParrafo.removeAttribute("style");
    console.log(nuevoParrafo);

    let attrId = nuevoParrafo.getAttribute("id");
    console.log(attrId);

    let attrNodeId = nuevoParrafo.getAttributeNode("id");
    console.log(attrNodeId);

    let nodoTextoDelParrafo = document.createTextNode("texto del párrafo");
    nuevoParrafo.append(nodoTextoDelParrafo);
    let np = nuevoDiv.appendChild(nuevoParrafo);
    np.setAttribute("id", "idP2");

    console.log(nuevoDiv);

    document.body.append(nuevoDiv);
    //03/11/2026
    // Eliminar atributos: removeAttribute y removeAttributeNames

    nuevoParrafo.setAttribute("saludar", "hola");
    nuevoParrafo.setAttribute("insultar", "feo");
    nombreAtributos = nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);

    nuevoParrafo.removeAttribute("saludar");
    nombreAtributos = nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);
    console.log(nombreAtributos);

    let atributoNodoEliminado = nuevoParrafo.removeAttributeNode(nuevoParrafo.getAttributeNode("insultar"));
    nombreAtributos = nuevoParrafo.getAttributeNames();
    console.log(nombreAtributos);
    console.log(nombreAtributos);

    let attr1 = nuevoParrafo.getAttributeNode("id");
    let attr2 = nuevoParrafo.getAttribute("id");
    let attr3 = nuevoParrafo.id;

    console.log(attr1);
    console.log(attr2);
    console.log(attr3);

    //Atributos data
    let enlace = document.querySelector(".enlace");
    console.log(enlace);
    enlace.setAttribute("data-fono", "cobrar dinero")
    enlace.setAttribute("data-description", "otra cosa");
    console.log(enlace.dataset);

    enlace.dataset.description = "hoy es martes";
    console.log(enlace.dataset);
    console.log(enlace.getAttribute("data-id"));

    // Atributos CSS
    console.log(enlace.style);
    console.log(enlace.style.backgroundColor);
    console.log(enlace.style.color);
   
    enlace.style.setProperty("text-decoration","none");
    enlace.style.textDecoration = "underline";
    enlace.style.display = "inline-block";
    enlace.style.width = "50%";
    enlace.style.textAlign = "right";

    let html = document.documentElement;
    html.style.backgroundColor = "#adea90";
    // classList permite añadir, eliminar y alternar clases CSS

// Selecciona el elemento HTML que tiene el id "miH3"
let miH3 = document.querySelector("#idH3");

// Añade la clase "cUno" al elemento
miH3.classList.add("cUno");
// Añade la clase "cDos" al elemento
miH3.classList.add("cDos");
// Muestra todas las clases del elemento
console.log(miH3.classList);
// Elimina la clase "cDos"
miH3.classList.remove("cDos");
// Muestra las clases después de eliminar "cDos"
console.log(miH3.classList);
// Si "
// Muestra la clase que ocupa la posición 1
console.log(miH3.classList[1]);

// Obtiene la clase de la posición 1
// Selecciona el div que tiene el id "idDiv1"
let miDiv = document.querySelector("#idDiv1");

// Introduce texto literal, sin interpretar las etiquetas HTML
miDiv.textContent = "<strong> texto del div1 </strong>";

// Introduce contenido HTML, interpretando las etiquetas
miDiv.innerHTML = "<strong> texto del div1 </strong>";

// Añade más contenido HTML sin borrar el anterior
miDiv.innerHTML += "<br> otra <strong><i> linea </i></strong>";

// Muestra el HTML completo del elemento, incluyendo el propio div
console.log(miDiv.outerHTML);

// Muestra el contenido HTML que hay dentro del div
console.log(miDiv.innerHTML);

// Muestra solamente el texto, sin las etiquetas HTML
console.log(miDiv.textContent); 
console.log(miH3.classList.item(1));


}   