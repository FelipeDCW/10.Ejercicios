export default class Herbivoro extends Animal {
    #idAnimal
    #descripcion
    #tipoComida
    constructor(idAnimal, descripcion, tipoComida ){
        super(idAnimal,descripcion)
        this.#tipoComida = tipoComida
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

    alimentarse(){
        console.log(`alimentarse de hierbas`);
    }
}
