"use strict"
{
    /**
     * PARA NAVEGAR POR ELEMENTOS
     * children : devuelve un array de HTMLCollection con los elementos hijo del elemento en cuestión
     * parentElement : devuelve el elemento padre o null si no tiene 
     * firstElementChild = children[0] = primer hijo
     * lastElementChild = children[ultimo]  = children[children.length-1] = último hijo
     * previousElementSibling : devuelve el elemento hermano previo (null si no tiene)
     * nextElementSibling : devuelve el siguiente elemento hermano (null si no tiene)

     *  
     */
    console.log(document.body.children);
    console.log(document.body.children.length);

    //HTML colection no puede usar foreach
    // document.body.children.foreach (function (elem)){
    //     console.log(elem);
    // }
    for (elem of document.body.children) {
        console.log(elem);
    }
    console.log(document.body.parentElement);

    let ulAviones = document.querySelector("#idAviones");

    let primerAvion = ulAviones.firstElementChild;
    console.log(primerAvion.textContent);
    //children[0];
    let ultimoAvion = ulAviones.lastElementChild;
    // [children.length -1]
    console.log(ultimoAvion.textContent);

    let ulCoches = ulAviones.previousElementSibling;
    console.log(ulCoches);

    let enlace = ulAviones.nextElementSibling;
    console.log(enlace);

    /**
     * PARA NAVEGAR POR LOS NODOS
     * childNodes : devuelve un array de NodeList con los nodos hijos del elemento en cuestión
     * parentNode: devuelve el nodo padre o null si no tiene 
     * firstChild : devuelve el primer nodo hijo
     * lastChild : devuelve el último nodo hijo
     * previousSibling : devuelve el anterior nodo hermano
     * nextSibling : devuelve el siguiente nodo hermano
     */


    console.log(document.body.childNodes);
    console.log(document.body.childNodes.length);

    document.body.childNodes.forEach(nodo => console.log(nodo));

    console.log(document.body.parentNode)

    console.log(ulAviones.childNodes[1]);

    console.log(ulAviones.firstChild);
    console.log(ulAviones.firstChild.nextSibling);
    console.log(ulAviones.firstChild.nextSibling.previousSibling);
    console.log(ulAviones.lastChild);



}