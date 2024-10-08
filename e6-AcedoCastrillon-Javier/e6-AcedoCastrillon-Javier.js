function filtrarYTransformar(lista) {
    if (!Array.isArray(lista)) {
        return 'Error: el argumento debe ser una lista';
    }
    lista.forEach(element => {
        if (typeof element !== 'number') {
            return 'Error: la lista debe ser solo de números';
        }
    });

    return lista.filter(num => num % 2 !== 0).map(num => num * 2);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(filtrarYTransformar(numeros));