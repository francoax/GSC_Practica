function greet(greeting? : string) : string {
    if(greeting) {
        return greeting.toUpperCase();
    } else {
        return 'Hola';
    }
}


const defaultGreeting : string = greet();
const portugueseGreeting : string = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);