/* Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5 */
"use strict"
{
    function eliminarPatrones(cadena, patron){
        let array = cadena.split(","); 
        console.log(array);
        for( let i=0;i<array.length;i++){
            let aplicado =  array[i].replace(patron," ");
             array[i]= aplicado;
        }
        let resultado =array.join("");
        return resultado;
        }
    console.log(eliminarPatrones("xyz1,xyz2,xyz3,xyz4","xyz"));










}