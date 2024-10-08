class Estudiante{
    constructor(nombre, edad, notas){
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }
    agregarNota(nota){
        this.notas.push(nota);
    }
    calcularPromedio(){
        const suma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
        return suma / this.notas.length;
    }
    comprobarAprobado(){
        const promedio = this.calcularPromedio();
        return promedio >= 5;
    }
}

const estudiante = new Estudiante('Javier', 21, [5, 6, 7, 8]);
estudiante.agregarNota(9);
console.log(estudiante.calcularPromedio());
console.log(estudiante.comprobarAprobado());