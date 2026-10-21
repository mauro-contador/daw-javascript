/*36. Programa una función que dado un array devuelva
 el número más alto y el más bajo de dicho array,
  p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60]*/
  "use strict" 
  {
      function numeroAltoYBajo(array) {
          let numeroAlto = Math.max(...array);
          let numeroBajo = Math.min(...array);
          let altoYBajo = [] ;
          altoYBajo.push(numeroBajo);
          altoYBajo.push(numeroAlto);
          return altoYBajo;
      }
      let array = [1, 2, 3, 4, 5, 6];
      console.log(numeroAltoYBajo(array));
  }