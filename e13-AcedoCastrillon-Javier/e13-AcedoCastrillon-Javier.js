class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function calcularSumaPrecios(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

const productos = [detergente = new Productos('Detergente', 1000), jabon = new Productos('Jabón', 500), shampoo = new Productos('Shampoo', 2000)];

console.log(calcularSumaPrecios(productos));