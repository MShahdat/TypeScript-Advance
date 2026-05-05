"use strict";
//& OOP: Class =>> object
Object.defineProperty(exports, "__esModule", { value: true });
//& normal approach
// class Animal {
//   name: string
//   species: string
//   sound: string
//   constructor (name: string, species: string, sound: string) {
//     this.name = name
//     this.species = species
//     this.sound = sound
//   }
//   makingSound (){
//     console.log(`The "${this.name}" making sound : ${this.sound}`)
//   }
// }
//& parameter properties
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makingSound() {
        console.log(`The "${this.name}" making sound : ${this.sound}`);
    }
}
const dog = new Animal('dogis mia', 'dog', 'bark bark...');
// ~console.log(dog.name) 
const cat = new Animal('cat mia', 'cat', 'Meaw, Meaw...');
// console.log(cat.sound)
dog.makingSound();
cat.makingSound();
//# sourceMappingURL=classObject.js.map