class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = 0;
    }

    actualizarStock(cantidad) {
        this.stock += cantidad;
        if (this.stock < 0) {
            this.stock = 0;
        }
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        if (producto.precio <= 0) {
            return 'Error: el precio debe ser mayor a 0';
        }
        if (!(typeof(producto.precio) === 'number')) {
            return 'Error: el precio debe ser un número';
        }
    
        if (!(producto instanceof Producto)) {
            return 'Error: tiene qie ser un producto';
        }
        this.productos.push(producto);
    }

    eliminarProducto(nombre) {
        const index = this.productos.findIndex(producto => producto.nombre === nombre);
        if (index === -1) {
            return 'Error: el producto no existe';
        }
        this.productos.splice(index, 1);
    }

    buscarProducto(nombre) {
        const producto = this.productos.find(p => p.nombre === nombre);
        if (!producto) {
            return 'Error: el producto no existe';
        }
        return producto;
    }
}

const inventario = new Inventario();

const producto1 = new Producto('Detergente', 'Limpieza', 1000);

inventario.agregarProducto(producto1);
console.log(inventario.buscarProducto('Detergente'));
inventario.eliminarProducto('Detergente');
console.log(inventario.buscarProducto('Detergente'));
