"use strict"
{
  // Para insertar elementos HTML "grandes"

  // append → Añade elementos o texto al final de otro elemento
  // appendChild → Añade un nodo hijo al final de otro elemento

  // Crea un elemento HTML <img>, pero todavía no lo inserta en la página
  let img = document.createElement("img");

  // Asigna la URL de la imagen al atributo src
  img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg");
  img.style.setProperty("background-color", "red");
  document.body.append(img);
  console.log(img.isConnected);

  let miDiv2 = document.createElement("div");
  let miP = document.createElement("p");
  miP.innerHTML = "aqui <strong> estoy </strong>";
  miDiv2.append(miP);
  document.body.append(miDiv2);
  /**
    *      insertAdjacent: 3 versiones:
    * insertAdjacentElement (insertPosition, HTMLElement) : para insertar un Element
    * insertAdjacentHTML(insertPosition, string) : para insertar código HTML (similar a innerHTML)
    * insertAdjacentText (inserPosition, string) : para insertar texto (similar a textContent)
    * 
    * llevan 2 parámetros:
    * parámetro1: posición donde va insertado el contenido.
    *  beforebegin: el contenido se inserta ANTES de la etiqueta HTML de apertura
    *  afterbegin: el contenido se inserta DENTRO de la etiqueta HTML, antes de su primer hijo
    *  beforeend: el contenido se inserta DENTRO de la etiqueta HTML, después de su último hijo (=appendChild())
    *  afterend: el contenido se inserta DESPUÉS de la etiqueta HTML de cierre
    * parámetro2: el contenido que se inserta
    */
  /**
   * 
   * 
   * div
   *   IMAGEN
   * p
   * /div
   * 
   */
  miDiv2.insertAdjacentElement("afterend", img);

  let listaDeP2 = document.
    querySelectorAll("p");
  console.log(listaDeP2);

  console.log(listaDeP2[2]);
  let miP2 = listaDeP2[2];
  miP2.insertAdjacentElement("beforeend", img);

  // hacer actividades
  // EXERCISE 1: Using prompt, ask a number N to an user and create in DOM N paragraphs with a random number between 0 and 10 each one (both included
  let n = prompt("Dime un número: ", 10);
  for (let i = 0; i < n; i++) {
    let p = document.createElement("p");
    let random = Math.floor(Math.random() * 11);

    p.innerHTML = `<i>${random}</i>`;

    document.body.append(p);
  }
  // EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing your name in bold and italic + a random number between 0 and 10 in each H2.
  let n2 = prompt("Dime un número: ", 10);
  if(!isNaN(n2)){
  for (let i = 0; i < n2; i++) {
    let random = Math.floor(Math.random() * 11);
    let h2 = document.createElement("h2");
    h2.setAttribute("id",`idEj2_${++i}`);
    h2.innerHTML = `<b><i>Mauro</i></b> ${random}`;
    document.body.append(h2);
  }
}
  //EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an unordered list with N random numbers between 1 and 15 for each element in bold.
  let n3 = prompt("Dime un número: ", 10);
  let unorderedList = document.createElement("ul");
  
  for (let i = 0; i < n3; i++) {
      let random = Math.floor(Math.random() * 15) + 1;
      let li = document.createElement("li");
  
      li.innerHTML = `<strong>${random}</strong>`;
  
      unorderedList.append(li);
  }
  
  document.body.append(unorderedList);

  //EXERCISE 4 : Create an image and put it after the last random number in exercise number one.

  let listaPEj1 = document.body.querySelectorAll(".cEj1");
  console.log(listaPEj1);
  let ultimoPEj1 = listaPEj1[listaPEj1.length-1];
  let img2 = img.cloneNode(true);
  ultimoPEj1.insertAdjacentElement("afterend",img2);
  let saltoLinea = document.createTextNode
}

// EXERCISE 5  Create a link to www.google.es before the first child of the H2 in exercise number two

let elPrimerH2DelEj2 = document.body.querySelector("#idEj2_1");
console.log(elPrimerH2DelEj2);
let enlace = document,createElement


//EXERCISE 6: Create a paragraph with your name and put it after the end of unorderer list in exercise three
let parrafo = document.createElement("p");
parrafo.textContent = "Mauro";
unorderedList.after(parrafo);