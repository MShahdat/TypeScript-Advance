"use strict";
//& union and intersection
Object.defineProperty(exports, "__esModule", { value: true });
const show = (role) => {
    if (role === 'admin') {
        console.log('nevigate admin page');
    }
    else if (role === 'user') {
        console.log('nevigate user page');
    }
    else {
        console.log('navigate guest page');
    }
};
const employeeManager = {
    id: '39',
    name: 'Shahdat',
    salary: 3000030,
    phone: '01843',
    experience: 4,
};
console.log(employeeManager);
//# sourceMappingURL=unionIntersection.js.map