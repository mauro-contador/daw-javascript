/*Crea una función llamada analizarEmails(emails) que reciba un array de correos electrónicos y devuelva un objeto con tres propiedades:
- validos: array con todos los correos que tengan un formato válido, manteniendo el orden y los duplicados.
- dominios: array con los dominios de los correos válidos, sin duplicados y en minúsculas.
- invalidos: número de correos que no cumplen el formato. */


"use strict"
{
    function analizarEmails(emails){
        let regExp = /^[a-zA-Z0-9._-]+@[A-Za-z0-9-]+\.[a-zA-Z]{2,}$/;
        let validos = emails.filter((elemento) => regExp.test(elemento));
        let invalidos  = emails.length - validos.length;
        let dominios = validos.map((elemento) => elemento.toLowerCase().split("@")[1]);
        let dominiosFiltrados = new Set (dominios);
        dominiosFiltrados = [...dominiosFiltrados];
        return {
            validos : validos,
            invalidos : invalidos,
            dominios : dominiosFiltrados
        }
    }
    let emails = [
        "mauro@gmail.com",
        "ana@empresa.es",
        "correo-invalido",
        "LUIS@GMAIL.COM",
        "pepe@mail.c",
        "ana@empresa.es"
    ];
    console.log(analizarEmails(emails));
    
}
