"use strict";
//& array & object
Object.defineProperty(exports, "__esModule", { value: true });
let list = ['apple', 'mango'];
list.push('orange');
//! list.push(1)  not assignable number
let mixed = [2, 'milk', 4, 'sugar', true];
mixed.push(3);
mixed.push('asd');
mixed.push(false);
//~ console.log(mixed)
//& tuple
let cooradinate = [39, 59];
//! cooradinate[0] = 'shahdat';
cooradinate[0] = 30;
//~ console.log(cooradinate)
let move = ['dkhaka', 'chandpur', 'bia launch', 3];
move.push('asd');
move.push('a-4asdf');
move.push(4);
//~ console.log(move)
let studentInfo = [20, 'shahdat'];
//& objects
const user = {
    firstName: 'Sheikh',
    //~middleName: 'Safayat',
    lastName: 'Ridoy',
    organization: 'safayat store'
};
//! user.organization = 'asdf'
const user1 = {
    firstName: 'Sheikh',
    //~middleName: 'Safayat',
    lastName: 'Ridoy',
    organization: 'safayat store'
};
//! user1.organization = 'asdf'
console.log(user1);
const student = {
    name: 'shahdat',
    id: 39,
    dept: 'cse'
};
//! if one or more property missing that will be error
//# sourceMappingURL=nonPrimitive.js.map