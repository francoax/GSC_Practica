function doStuff(value: any): void {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join('')); // Infiere que el tipo de value va a ser string
    } else if (typeof value === 'number') { 
        console.log(value.toPrecision(5)); // Infiere que el tipo de value va a ser number. Ambos esto es por el metodo que se le aplica a la variable
    }

    value;
}

doStuff(2);
doStuff(22);
doStuff(222);
doStuff('hello');
doStuff(true);
doStuff({});