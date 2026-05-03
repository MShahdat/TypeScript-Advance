//& constraint with generics


//! not efficient approach
// const studentInfo = <T> (student: T) => {
//   return {
//     batch: 'next level B7',
//     ...student
//   }
// }



//* with constriant
type constraint = {
  id: number
  name: string
  batch: string
}

const studentInfo = <T extends constraint> (student: T) => {
  return {
    plateform: 'Programming Hero',
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
  batch: 'next level B7',
  hasIncome: true,
  isMarried: true
}

// console.log(studentInfo(student1))  // will be error
console.log(studentInfo(student2))