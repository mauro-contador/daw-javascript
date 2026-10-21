"use strict"
/*34. Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres.*/
{
function validarEmail( email){
    const validar = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.+[a-zA-Z]{2,}/;
    return validar.test(email);
}

let email = "Mauro2008@gmail.com";
console.log(validarEmail(email));

}