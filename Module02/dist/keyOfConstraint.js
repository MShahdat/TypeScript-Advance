"use strict";
//& keyof: type operation
Object.defineProperty(exports, "__esModule", { value: true });
const poorU = 'plane';
const user = {
    id: 23,
    name: 'x',
    address: {
        city: 'dhaka',
        house: 'abc'
    }
};
const getProperty = (obj, key) => {
    return obj[key];
};
const product = {
    id: 39,
    name: 'iron',
    price: 39,
    category: 'electronics',
    rating: 3.5
};
const student = {
    id: 39,
    name: 'shahdat'
};
// console.log(getProperty(user, 'address'))
console.log(getProperty(student, 'name'));
//# sourceMappingURL=keyOfConstraint.js.map