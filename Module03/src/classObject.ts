//& OOP: Class =>> object


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
  constructor (public name: string, public species: string, public sound: string) {
  }

  makingSound (){
    console.log(`The "${this.name}" making sound : ${this.sound}`)
  }
}


const dog = new Animal('dogis mia', 'dog', 'bark bark...')
// ~console.log(dog.name) 

const cat = new Animal('cat mia', 'cat', 'Meaw, Meaw...')
// console.log(cat.sound)

dog.makingSound()
cat.makingSound()

