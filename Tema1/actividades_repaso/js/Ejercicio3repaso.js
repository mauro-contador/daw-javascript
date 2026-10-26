/* Si la edad es negativa, superior a 120 o no es un número entero, devuelve "Edad inválida".
Si tiene 18 años o más, puede entrar.
Si tiene 16 o 17 años, solo puede entrar si tienePermiso es true.
Si tiene menos de 16 años, no puede entrar.*/
"use  strict"
{
function comprobarAcceso(edad,tienePermiso){
    
    if(!Number.isInteger(edad) || edad < 0 || edad > 120){
        return "Edad Inválida";
    }
    else if(tienePermiso && (edad === 16 || edad === 17) ){
        return "Acceso permitido";
    }
    // else if(edad<16 || !tienePermiso && (edad ===17 || edad ===16) ){
    //     return "Acceso denegado"
    // }
    else if(edad>= 18){
        return "Acceso permitido"
    }else{
        return "Acceso Invalido"
    }
}
let edad = 16;
console.log(comprobarAcceso(edad,true));



}