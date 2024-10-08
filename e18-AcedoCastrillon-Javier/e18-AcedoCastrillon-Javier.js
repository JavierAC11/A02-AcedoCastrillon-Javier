function calcularPrecioFinal(precioBase, descuentos) {
    if (precioBase <= 0) {
        throw new Error('Error: el precio base debe ser mayor a 0')
    }
    let precioFinal = precioBase;
    descuentos.forEach(descuento => { 
        if (descuento < 0 || descuento > 100) {
            throw new Error('Error: el descuento debe estar en el rango de 0 a 100')
        }
        precioFinal -= precioFinal * ((descuento / 100))
    });
    return precioFinal
}

function mostrarPrecioFinal(precioBase, descuentos) {
    console.log(`El precio final después de aplicar los descuentos es: ${calcularPrecioFinal(precioBase, descuentos)}`)
}


mostrarPrecioFinal(99.99, [10, 20, 30])