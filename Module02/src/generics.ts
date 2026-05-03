//& Generics => dynamically handle type

//* using type alias
//& normal approach
type Animal = string[]
const animal: Animal = ['a', 'b', 'c']
const animal2: Array<string> = ['a', 'b', 'c']
const animal3: string[] = ['a', 'b', 'c']

type Age = number[]
const age: Age = [5, 3, 2]
const age1: Array<number> = [5, 3, 2]
const age2: number[] = [5, 3, 2]

type Boolean = boolean[]
const boolean: Boolean = [true, false, false, true]
const boolean1: boolean[] = [true, false, false, true]
const boolean2: Array<boolean> = [true, false, false, true]



//& with generics
type GenericArray<T> = Array<T>

const animal1: GenericArray<string> = ['a', 'b', 'c']
const mix: GenericArray<number | string> = [5, 3, 2, 'ok', 'done']
const boolean3: GenericArray<boolean> = [true, false, false, true]



//& normal type alias approach
type Coordinates = [number, number]
const coordinate: Coordinates = [20, 30]



//& with generics
type Cordinate<X, Y> = [X, Y]
const cor: Cordinate<number, number> = [20, 49]
const user: Cordinate<string, number> = ['shahdat', 20]




//& object with generics
type List = {
  name: string,
  id: number
}
const list: GenericArray<List> = [
  { name: 'shahdat', id: 39 },
  { name: 'rakib', id: 29 },
  { name: 'manik', id: 39 },
  { name: 'ok', id: 9 }
]


//* using interface
interface Developer<T, X, Y, Z = null> {
  name: string,
  salary: number
  device: {
    brand: string
    model: string
    release: number 
  }
  smartWatch: T
  phone: X
  bike: Y
  optional?: Z
}

interface Watch {
  heartRate: number
  calling: boolean
}

const poorDev : Developer<Watch, string, boolean> = {
  name: 'Mr. Poor',
  salary: 30,
  device: {
    brand: 'hp',
    model: 'hp382',
    release: 2024
  },
  smartWatch: {
    heartRate: 100,
    calling: true
  },
  phone: 'realme',
  bike: false,
  //* optional: 'no'   // this is optional property
}

interface appleWatch {
  calling: boolean
  aiFeature: boolean
}

const richDev : Developer<appleWatch, string, boolean, string> = {
  name: 'Mr. Poor',
  salary: 30,
  device: {
    brand: 'hp',
    model: 'hp382',
    release: 2024
  },
  smartWatch: {
    aiFeature: true,
    calling: true
  },
  phone: 'iPhone',
  bike: true,
  optional: 'yes optional'
}





//& funtion with generics

//! not efficient
const arrayStr = (val: string) => [val]
const arrayNum = (val: number) => [val]
const arrayObj = (val: {name: string, id: number}) => [val]
// console.log(arrayStr('shahdat'))
// console.log(arrayObj({
//   name: 'a',
//   id: 3
// }))
// console.log(arrayObj({
//   name: 'asd',
//   id: 29
// }))




//* good for generics
const ArrayGenerics = <T>(val: T) => [val]
// console.log(ArrayGenerics('shahdat'))
// console.log(ArrayGenerics({
//   name: 'a',
//   id: 3
// }))
// console.log(ArrayGenerics({
//   name: 'asd',
//   id: 29,
//   city: 'chand'
// }))




//& touple
const arrayTuple = (val1: number, val2: string) => [val1, val2]
// console.log(arrayTuple(29, 'rakib'))


const arrGenericsTuple = <X, Y> (val1: X, val2: Y) => [val1, val2] 

// console.log(arrGenericsTuple(29, 'rakib'))
// console.log(arrGenericsTuple('city', 'rakib'))
// console.log(arrGenericsTuple('rakib', true))




//! normarl approach
// const studentInfo = (student: object) => {
//   return {
//     batch: 'next level B7',
//     ...student
//   }
// }


//? not efficient approach at all
const studentInfo = <T> (student: T) => {
  return {
    batch: 'next level B7',
    ...student
  }
}


const student1 = {
  name: 'Mr. X',
  id: 38,
  dept: 'cse',
  cgpa: 3.8
}

const student2 = {
  name: 'Mr. Y',
  id: 38,
  city: 'dhaka',
  hasIncome: true,
  isMarried: true
}

console.log(studentInfo(student2))
console.log(studentInfo(['shahdat', 'rakib', 2]))

