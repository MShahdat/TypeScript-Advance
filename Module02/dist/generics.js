"use strict";
//& Generics => dynamically handle type
Object.defineProperty(exports, "__esModule", { value: true });
const animal = ['a', 'b', 'c'];
const animal2 = ['a', 'b', 'c'];
const animal3 = ['a', 'b', 'c'];
const age = [5, 3, 2];
const age1 = [5, 3, 2];
const age2 = [5, 3, 2];
const boolean = [true, false, false, true];
const boolean1 = [true, false, false, true];
const boolean2 = [true, false, false, true];
const animal1 = ['a', 'b', 'c'];
const mix = [5, 3, 2, 'ok', 'done'];
const boolean3 = [true, false, false, true];
const coordinate = [20, 30];
const cor = [20, 49];
const user = ['shahdat', 20];
const list = [
    { name: 'shahdat', id: 39 },
    { name: 'rakib', id: 29 },
    { name: 'manik', id: 39 },
    { name: 'ok', id: 9 }
];
const poorDev = {
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
};
const richDev = {
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
};
//& funtion with generics
//! not efficient
const arrayStr = (val) => [val];
const arrayNum = (val) => [val];
const arrayObj = (val) => [val];
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
const ArrayGenerics = (val) => [val];
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
const arrayTuple = (val1, val2) => [val1, val2];
// console.log(arrayTuple(29, 'rakib'))
const arrGenericsTuple = (val1, val2) => [val1, val2];
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
const studentInfo = (student) => {
    return {
        batch: 'next level B7',
        ...student
    };
};
const student1 = {
    name: 'Mr. X',
    id: 38,
    dept: 'cse',
    cgpa: 3.8
};
const student2 = {
    name: 'Mr. Y',
    id: 38,
    city: 'dhaka',
    hasIncome: true,
    isMarried: true
};
console.log(studentInfo(student2));
console.log(studentInfo(['shahdat', 'rakib', 2]));
//# sourceMappingURL=generics.js.map