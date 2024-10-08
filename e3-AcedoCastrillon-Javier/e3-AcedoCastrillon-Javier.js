const numeros = [1, 2, 3, 4, 5];

function obtenerPares(numeros) {
    const pares = numeros.filter(numero => numero % 2 === 0);
    return pares;
}

function obtenerMayor(numeros) {

    const mayor = numeros.reduce((acumulador, numero) => (acumulador > numero ? acumulador : numero));
    return mayor;

}

function obtenerNumerosAlCuadrado(numeros) {
    const numerosCuadrados = numeros.map(numero => numero * numero);
    return numerosCuadrados;
}

console.log(obtenerPares(numeros));
console.log(obtenerMayor(numeros));
console.log(obtenerNumerosAlCuadrado(numeros));