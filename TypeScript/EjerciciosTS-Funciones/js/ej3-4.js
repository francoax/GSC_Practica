"use strict";
function greet(greeting) {
    if (greeting) {
        return greeting.toUpperCase();
    }
    else {
        return 'Hola';
    }
}
const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');
console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);
