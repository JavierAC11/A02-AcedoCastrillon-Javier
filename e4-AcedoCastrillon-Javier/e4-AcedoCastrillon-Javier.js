const numeros = [[10, 20],[ 30, 40], [50, 60]];

function aplanar(matriz) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
        if (Array.isArray(matriz[i])) {
            resultado = resultado.concat(aplanar(matriz[i]));
        } else {
            resultado.push(matriz[i]);
        }
    }
    return resultado;
}

function calcularPromedio(numeros) {
    arrayNumeros = aplanar(numeros);
    const suma = arrayNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / arrayNumeros.length;
}


console.log(numeros)
console.log(aplanar(numeros))
console.log(calcularPromedio(numeros))