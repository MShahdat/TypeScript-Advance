"use strict";
//& Rest and Spread Operatior 
Object.defineProperty(exports, "__esModule", { value: true });
//& Spread operator by array
const friends = ['Rahim', 'Karim'];
const schoolFr = ['Akbar', 'Jabbar', 'Salam'];
const CollageFr = ['Pintu', 'Mintu', 'Zintu'];
const VersityFr = ['Salam', 'Rafiq'];
//! friends.push(schoolFr)
friends.push(...schoolFr);
friends.push(...CollageFr);
//~ console.log(friends)
//& Spread operator by object
const user = {
    name: 'shahdat',
    city: 'chandpur'
};
const stu = {
    id: 59,
    dept: 'cse',
};
const inf = (user); //* output => { user: { name: 'shahdat', city: 'chandpur' } }
const info = { ...user, ...stu };
console.log(info);
//& without Rest operator
const invite = (fr1, fr2, fr3) => {
    console.log(`My friend ${fr1} is invited`);
    console.log(`My friend ${fr2} is invited`);
    console.log(`My friend ${fr3} is invited`);
};
//! invite('mintu', 'chintu')
//! invite('mintu', 'chintu', 'pintu', 'jontu')
//~ invite('mintu', 'chintu', 'jontu')
//& Rest operator
const invitation = (...friends) => {
    for (let friend of friends) {
        if (typeof friend === 'string') {
            console.log(`My friend "${friend}" is invited`);
        }
        else if (typeof friend === 'number') {
            console.log(`Friend ID "${friend}" is invited`);
        }
    }
};
invitation('mintu', 'chintu', 303, 343);
//~ invitation('mintu', 43, 'chintu', 'pintu', 'jontu')
//~ invitation('mintu', 'chintu', 21, 'jontu')
//# sourceMappingURL=restSpread.js.map