function isLeapYear(anio1, anio2) {
    //Primero se comprueba que los dos años introduceidos sean numeros
    if (typeof anio1 !== 'number' || typeof anio2 !== 'number') {
        return 'ERROR: Una de las entradas no es un número.';
        
    }
    //Se comprueba que esten en el rango y que el anio1 simpre tiene que ser mas pequeño
    if (anio1 < 2001 || anio2 > 2500 || anio1 > anio2) {
        return 'error: fuera de rango';
        
    }
    //Creamos una contante que guardara los años bisiestos
    const aniosBisiestos = [];
    // Recorremos todos los años entre un año y otro
    for (let anio = anio1; anio <= anio2; anio++) {
        
        //Cuando es bisiesto se añade a la lista que hemos creado antes
        if (anio % 4 === 0) {
            aniosBisiestos.push(anio);
        }
    }
    //devolvemos los anios bisiestos
    return aniosBisiestos
}

console.log(isLeapYear(1999, 2500));
console.log(isLeapYear(2024, 2501));
console.log(isLeapYear(2500, 2024));
console.log(isLeapYear(2500, "h2024"));
console.log(isLeapYear(2024, 2500));