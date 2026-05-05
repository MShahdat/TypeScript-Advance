//& instance of type guard

class Person {
  name: string
  constructor(name: string){
    this.name = name
  }

  getSleep(hour: number){
    console.log(`${this.name} is sleeping ${hour} hours daily`)
  }
}

class Student extends Person{
  doStudy(hour: number){
    console.log(`${this.name} is studying ${hour} hours regurlarly`)
  }
}

class Teacher extends Person {
  takeClass(hour: number){
    console.log(`${this.name} take class ${hour} hours daily`)
  }
}

const getInfo = (info: Person) => {
  if(info instanceof Student){
    info.doStudy(3)
  }else if(info instanceof Teacher){
    info.takeClass(4)
  }else{
    info.getSleep(8)
  }
}


const person = new Person('Mr X')
const st1 = new Student('pintu mia')
// st1.doStudy(5)
const te1 = new Teacher('Mr. Jinto')
// te1.takeClass(39)

// getInfo(st1)
// getInfo(te1)
// getInfo(person)




//& function guard => return true/false
const isPerson = (user: Person) =>{
  return user instanceof Person
}

const isTeacher = (user: Person) =>{
  return user instanceof Teacher
}

const isStudent = (user: Person) =>{
  return user instanceof Student
}


const Info = (info: Person) => {
  if(isStudent(info)){
    info.doStudy(3)
  }else if(isTeacher(info)){
    info.takeClass(4)
  }else{
    info.getSleep(8)
  }
}





