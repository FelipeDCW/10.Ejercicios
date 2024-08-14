export default class Zoologico{
    #idZoologico
    #nombreZoologico
    #animales
    constructor(idZoologico, nombreZoologico, animales = []){
        this.#idZoologico = idZoologico
        this.#nombreZoologico = nombreZoologico
        this.#animales = animales
    }
    get idZoologico(){
        return this.#idZoologico
    }
    set idZoologico(idZoologico){
        this.#idZoologico = idZoologico
    }
    get nombreZoologico(){
        return this.#nombreZoologico
    }
    set nombreZoologico(nombreZoologico){
        this.#nombreZoologico = nombreZoologico
    }
    get animales(){
        return this.#animales
    }
    set animales(animales){
        this.#animales = animales
    }

    agregarAnimales(animales){
        this.#animales.push(animales)
    }
    quitarAnimal(idAnimal){

        this.#animales = this.#animales.filter(animales => animales.idAnimal != idAnimal) 
        
    }

    listarAnimales(){
        this.#animales.forEach(indice => {
            console.log(indice.descripcion);
        });
    }
    buscarAnimal(id){
        this.#animales.filter(animales => animales.idAnimal == id) 
    }


}