import Homnivoro from "./homnivoro.js";

export default class Gaviota extends Homnivoro{
    #velocidad
    
    constructor(idAnimal, descripcion, tipoComida, velocidad){
        super(idAnimal,descripcion,tipoComida)
        this.#velocidad = velocidad
    }
    get velocidad() {
        return this.#velocidad;
    }
    set velocidad(velocidad) {
        this.#velocidad = velocidad;
    }
    
    desplazarse(){
        console.log(`Desplazarse  la gaviota a una velocidad de ${this.#velocidad}`);
    }
}

