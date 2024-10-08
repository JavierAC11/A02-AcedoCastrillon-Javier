function isLeapYear(anio1, anio2) {
    if (typeof anio1 !== 'number' || typeof anio2 !== 'number') {
        return 'ERROR: Una de las entradas no es un número.';
        
    }
    if (anio1 < 2001 || anio2 > 2500 || anio1 > anio2) {
        return 'error: fuera de rango';
        
    }

    const aniosBisiestos = [];
    for (let anio = anio1; anio <= anio2; anio++) {
        if (anio % 4 === 0) {
            aniosBisiestos.push(anio);
        }
    }

    return aniosBisiestos
}

console.log(isLeapYear(2024, 2500));