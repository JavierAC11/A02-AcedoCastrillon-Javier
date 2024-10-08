function Personaje(nombre, raza) {
    this.nombre = nombre;
    this.raza = raza;
    this.nivel = 1;
    this.puntosDeVida = 100;
    this.atacar = function(personaje)  {
        personaje.puntosDeVida -= 10;
    }
    this.recuperarVida = function() {
        this.puntosDeVida += 20;
        if (this.puntosDeVida > 100) {
            this.puntosDeVida = 100;
        }
    }

    this.subirNivel = function() {
        if  (this.puntosDeVida <= 0) {
            alert(`Personaje ${this.nombre} ha sido derrotado`);
            this.nivel = 1;
            this.puntosDeVida = 100;
        }else {
            this.nivel++;
        }
    }
}

let p1 = new Personaje('P1', 'Elfo');
let p2 = new Personaje('P2', 'Humano');

let personajes = [p1, p2]

console.log(personajes);

p1.atacar(p2);
p1.atacar(p2);
p1.atacar(p2);
p1.atacar(p2);

console.log(p2)

p2.recuperarVida();
console.log(p2)
p1.subirNivel();
console.log(personajes)