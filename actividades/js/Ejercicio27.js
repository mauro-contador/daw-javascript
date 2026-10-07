/*27. En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no. */
"use strict"
{
    let vector = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    console.log("El número de elementos del vector es : " + vector.length);
    let parImpar = (n)=> {
        if(n == 0){
            console.log("PAR");
        }else if(n == 1){
            console.log("IMPAR");
        }else{
            parImpar(n-2);
        }
    };
    for(let i=0;i<vector.length;i++){
        console.log(parImpar(vector[i]));
    }
    
    





}