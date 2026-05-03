"use strict";
//& constraint with generics
Object.defineProperty(exports, "__esModule", { value: true });
const studentInfo = (student) => {
    return {
        plateform: 'Programming Hero',
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
    batch: 'next level B7',
    hasIncome: true,
    isMarried: true
};
// console.log(studentInfo(student1))  // will be error
console.log(studentInfo(student2));
//# sourceMappingURL=constraint.js.map