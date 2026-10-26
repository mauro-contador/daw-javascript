"use strict"
{
    let myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort();
    console.log(myNumbers);
    // ORDENAR DE MENOR A MAYOR
    myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    });
    console.log(myNumbers);
    //SIMPLIFICACION 1
    myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort((a, b) => a < b ? -1 : 1);
    console.log(myNumbers);
    //SIMPLIFICACION 2
    myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort((a, b) => a - b);

    //ORDENAR ARRAY DE MAYOR A MENOR

    myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort((a, b) => a < b ? 1 : -1);
    console.log(myNumbers);

    myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort((a, b) => a > b ? -1 : 1);
    console.log(myNumbers);

    myNumbers = [100, 5, 15, 1, 99];
    myNumbers.sort((a, b) => b - a);
    console.log(myNumbers);

    // ORDENAR ARRAY DE


    //ORDENAR ARRAYS DE STRINGS
    //Alfabeticamente (A-Z)
    let myNames = ["Leti", "Sandra", "Maria", "María", "Candela"];
    myNames.sort();
    console.log(myNames);

    myName.sort((a, b) => a.localeCompare(b));
    console.log(myNames);
    //Alfabeticamente (Z-A)
    // Alfabéticamente (Z-A)
    myNames = ["leti", "Sandra", "Maria", "Maria", "Candela"];
    myNames.sort((a, b) => b.localeCompare(a));
    console.log(myNames);

    myNames = ["A", "S", "M", "N", "C"];
    myNames.sort().reverse();
    console.log(myNames);



}