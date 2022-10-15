"use strict";
const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10];
/* function flatten(array: (number | number[])[]) {
    const flattened = []; */
function flatten(array) {
    const flattened = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            element; // any[]. Por haberlo definido a un tipo, ahora lo reconoce como un tipo number[]
            flattened.push(...element);
        }
        else {
            element; // any. Por haberlo definido a un tipo, ahora lo reconoce como number.
            flattened.push(element);
        }
    }
    return flattened;
}
const flattenedNumbers = flatten(numbers);
console.log('[Ejercicio 4.3]', flattenedNumbers); //Salida: Un array de numeros, de los cuales los array que estaban dentro, sus elementos pasaron a estar en un solo array completo.
