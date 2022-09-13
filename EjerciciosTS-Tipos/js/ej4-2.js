function padLeft(value, padding) {
    // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    // si padding es una cadena, return padding + value
    if (typeof padding === 'number') {
        return "".concat(Array(padding + 1).join(' ')).concat(value);
    }
    else if (typeof padding === 'string') {
        return padding + value;
    }
}
console.log('[Ejercicio 4.2]', "\n    ".concat(padLeft('', 0), "\n    ").concat(padLeft('a', 'b'), "\n    ").concat(padLeft('s', 'd'), "\n    ").concat(padLeft('f', 'g'), "\n    ").concat(padLeft('e', 'r'), "\n"));
