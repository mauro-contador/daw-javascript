"use strict"

function saludar3() {
    alert("Saludar 3");
}
let boton4 = document.querySelector("#idBoton4");

boton4.onclick = function () {
    alert("Saludar 4");
}

boton4.onclick = function () {

    alert("Saludar 4.1");
}
let boton5 = document.querySelector("#idBoton5");
console.log(boton5);

boton5.addEventListener("mouseover", function () {
    alert("Saludar 5 ");
});

boton5.addEventListener("mouseenter", function () {
    alert("Saludar 5.1 ");
});
boton5.addEventListener("mouseleave", function () {
    alert("Saludar 5.2 ");
});
boton5.addEventListener("click", function () {
    alert("Saludar 5.3 ");
});
let accion = function(){
    alert("Saludar 5.4");
}
boton5.removeEventListener("mouseover",accion);
boton5.addEventListener("mouseover",accion);
console.log(window);
window.addEventListener("load", function(){
    console.log("Ya está cargado el HMTL y el CSS");
});

console.log(document);
document.addEventListener("DOMContentLoaded", function(){
    console.log("Ya está cargado el HMTL solo (sin CSS)");
})
