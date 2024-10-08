function Libro(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.resumen = function() {
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`;
    };
    
}

const libros = [new Libro('Bajarse al moro', 'Jose Luis Alonso de Santos', 193), new  Libro('Caperucita roja', 'David Llorente', 75), new Libro('Chernobil', 'Santiago Camacho', 237)];
libros.forEach(libro => console.log(libro.resumen()));