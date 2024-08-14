import Animal from "./animal.js";
import Zoologico from "./zoologico.js";

let animal = new Animal(`1`,`Leon`)
let animal2 = new Animal(`2`,`Perro`)
let animal3 = new Animal(`3`,`Gato`)
let zoologico = new Zoologico(`1`,`Buin ZOO`)


zoologico.agregarAnimales(animal)
zoologico.agregarAnimales(animal2)
zoologico.agregarAnimales(animal3)

zoologico.listarAnimales()

zoologico.buscarAnimal(`2`);


zoologico.quitarAnimal(`2`)  
zoologico.listarAnimales()





