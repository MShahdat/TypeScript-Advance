//& inheritence


//*normal approach (not efficient)
class Student {
  name: string
  age: number
  address: string
  
  constructor (name: string, age: number, address: string){
    this.name = name
    this.age = age
    this.address = address
  }

  getSleep(hour: number){
    console.log(`${this.name} daily sleeping ${hour} hour`)
  }
}
const fakibaz = new Student('Mr. Fakibaz', 39, 'dhaka')
// fakibaz.getSleep(10)


class Teacher {
  name: string
  age: number
  address: string
  designation: string

  constructor (name: string, age: number, address: string, designation: string){
    this.name = name
    this.age = age
    this.address = address
    this.designation = designation
  }

  getSleep(hour: number){
    console.log(`${this.name} daily sleeping ${hour} hour`)
  }

  takeClass(hour: number){
    console.log(`${this.name} take class ${hour} hour daily`)
  }
}
const pintu = new Teacher('Mr. Pintu mia', 39, 'dhaka', 'lecturer')
pintu.takeClass(6)


class Parent {
  name: string
  age: number
  address: string
  
  constructor (name: string, age: number, address: string){
    this.name = name
    this.age = age
    this.address = address
  }

  getSleep(hour: number){
    console.log(`${this.name} daily sleeping ${hour} hour`)
  }
}

class Student1 extends Parent{
  doStudy(hour: number){
    console.log(`${this.name} ${hour} hour stuides regularly`)
  }
}


class Teacher1 extends Parent {
  designation: string
  constructor(name: string, age: number, address: string, designation: string){
    super(name, age, address)
    this.designation = designation
  }

  takeClass(hour: number){
    console.log(`${this.name} take class ${hour} hour daily`)
  }
}

const stu1 = new Student1('Mr. fakibaz', 29, 'dhaka')
stu1.doStudy(2)

const teacher1 = new Teacher1('Mr. Jintu mia', 3, 'asd', 'senior teacher')
teacher1.takeClass(6)

