"use strict";
let multiply;
let capitalize;
/* multiply = function (value : string): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

capitalize = function (x: number, y: number): number {
    return x * y;
} */
capitalize = function (value) {
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
};
multiply = function (x, y) {
    return x * y;
};
console.log('[Ejercicio 3.6]', capitalize(`habil ${multiply(5, 10)}`));
