"use strict";
//& array and object distructuring 
Object.defineProperty(exports, "__esModule", { value: true });
//& object destructuring
const user = {
    id: 48,
    name: {
        first: 'Md.',
        middle: 'Shahdat',
        last: 'Hossain'
    },
    Gender: 'male',
    education: {
        ssc: {
            name: 'charkalia High School',
            board: 'Comilla',
            result: {
                Bangla: 'A+',
                Math: 'A+',
            }
        },
        hsc: {
            name: 'Dania Collage',
            result: 4.00
        },
        bachalor: {
            name: 'Green University of Bangladesh',
            result: '0.00'
        }
    }
};
//* output: my name is : Md. Shahdat Hossain
//* output: my ssc bangla result is : A+
//* output: my university name: Green University of Bangladesh
//& without out destructuring
const first = user.name.first;
const middle = user.name.middle;
const last = user.name.last;
const name = first + ' ' + middle + ' ' + last;
const sscBangla = user.education.ssc.result.Bangla;
const uName = user.education.bachalor.name;
//~ console.log(`My name is ${name}`)
//~ console.log(`my ssc bangla result is : ${sscBangla}`)
//~ console.log(`my university name: ${uName}`)
//& with destructuring 
const { name: { first: firstName }, name: { last: lastName }, name: { middle: middleName }, education: { ssc: { result: { Bangla } }, bachalor: { name: varsityName } }, } = user;
//~ console.log(firstName, middleName, lastName, Bangla, varsityName)
//& array destructuring
const animal = ['cat', 'dog', 'elifent', 'cow'];
//* output: I need a elifent
console.log(`I need a ${animal[2]}`); // without destructuring
const [, , elefent] = animal; // with destructuring
console.log(`i need a ${elefent}`);
//# sourceMappingURL=distructuring.js.map