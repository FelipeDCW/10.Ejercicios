
export default class Tigre extends Carnivoro{
    #velocidad
    #tipoComida
    #idAnimal
    #descripcion
    #tipoComida 
    constructor(idAnimal, descripcion, tipoComida, velocidad){
        super(idAnimal,decripcion,tipoComida)
        this.#velocidad = velocidad
        this.#descripcion = descripcion
        this.#idAnimal = idAnimal
        this.#tipoComida = tipoComida
    }
    get velocidad() {
        return this.#velocidad;
    }
    
    set velocidad(velocidad) {
        this.#velocidad = velocidad;
    }
    get tipoComida() {
        return this.#tipoComida;
    }
    
    set tipoComida(tipoComida) {
        this.#tipoComida = tipoComida;
    }
    get idAnimal() {
        return this.#idAnimal;
    }
    
    set idAnimal(idAnimal) {
        this.#idAnimal = idAnimal;
    }
    get descripcion() {
        return this.#descripcion;
    }
    
    set descripcion(descripcion) {
        this.#descripcion = descripcion;
    }
    get tipoComida() {
        return this.#tipoComida;
    }
    
    set tipoComida(tipoComida) {
        this.#tipoComida = tipoComida;
    }
    desplazarse(){
        console.log(`Desplazarse  el tigre`);
    }
}


