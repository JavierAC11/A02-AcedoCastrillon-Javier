class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hablar() {
        return `${this.nombre} está haciendo un sonido.`;
    }
}

class Perro extends Animal {
    hablar() {
        return `${this.nombre} está ladrando.`;
    }
}

class Gato extends Animal {
    hablar() {
        return `${this.nombre} está maullando.`;
    }
}

const otroAnimal = new Animal('Otro', 10);
const perro = new Perro('Firulais', 5);
const gato = new Gato('Garfield', 3);

console.log(otroAnimal.hablar()) 
console.log(perro.hablar())
console.log(gato.hablar())