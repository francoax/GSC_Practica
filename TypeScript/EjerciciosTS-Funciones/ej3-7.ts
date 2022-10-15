const numberCollection: number[] = [];
const stringCollection: string[] = [];

function pushToCollection<T, Y>(item : T, collection: Y[]): Y[] {
    collection.push(item);
    return collection;
}

// Anadir algunas cosas a las colecciones
pushToCollection(false, stringCollection);
pushToCollection('hi', stringCollection);
pushToCollection([], stringCollection);

pushToCollection('1', numberCollection);
pushToCollection('2', numberCollection);
pushToCollection('3', numberCollection);

const incrementedByTwo : number[] = numberCollection.map((num) => num + 2);

console.log('[Ejercicio 3.7]', `[${incrementedByTwo}] debe ser igual a [3,4,5]`);