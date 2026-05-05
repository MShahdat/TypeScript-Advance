//& polymorphism : different behavior in different place


class Person {
  getSleep(){
    console.log(`I am a normal person and I sleep 8 hours`)
  }
}

class Student {
  getSleep(){
    console.log(`I am a student and I sleep 6 hours`)
  }
}

class NextLevel {
  getSleep(){
    console.log(`I am a next level developer and I sleep 5 hours`)
  }
}

const sleep = (param: Person) => {
  param.getSleep()
}

const person = new Person()
const student = new Student()
const nextLevel = new NextLevel()

// sleep(person)
sleep(nextLevel)





class Shape {
  getArea (){
    return 0
  }
}

class Circle extends Shape{
  radius: number
  constructor (radius: number){
    super()
    this.radius = radius
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius
  }
  // extra (){
  //   console.log('extra....')
  // }
}


class Rectengle extends Shape{
  height: number
  width: number
  constructor (height: number, width: number){
    super()
    this.height = height
    this.width = width
  }
  getArea(): number {
    return this.height * this.width
  }
}

const area = (param: Shape) =>{
  return param.getArea()
}


const shape = new Shape()
const circle = new Circle(3)
const rectengle = new Rectengle(3, 4)
console.log(area(circle))
// circle.extra()