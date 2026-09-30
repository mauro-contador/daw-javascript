/* . Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5 */

"Use strict "
{
    function dibujarDiente(letra,num){
        for(let i = 1;i<=num;i++){
            let cadena = "";
            for(let j=num;j>=i;j--){
                cadena = cadena + letra;
            }
        console.log(cadena);    
        }
    }
    dibujarDiente("A",5);
}