"use strict";
//& Type alias 
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    id: 48,
    name: {
        first: 'Md.',
        middle: 'Shahdat',
        last: 'Hossain'
    },
    Gender: 'Male',
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
            gpa: 4.00
        },
        bachalor: {
            name: 'Green University of Bangladesh',
            cgpa: 0.00
        }
    }
};
const user2 = {
    id: 94,
    name: {
        first: 'Sheikh',
        last: 'Ridoy'
    },
    //! Nationality: 'Bangladesh',  
    Gender: 'Male',
    education: {
        ssc: {
            name: 'Feni Govt. School',
            board: 'Comilla',
            result: {
                Bangla: 'A+',
                Math: 'A',
            }
        },
        hsc: {
            name: 'Dania Collage',
            gpa: 5.00
        },
        bachalor: {
            name: 'Green University of Bangladesh',
            cgpa: 4.00
        }
    }
};
const add = (a, b) => a + b;
console.log(`summation of : `, add(30, 40));
//# sourceMappingURL=typeAlias.js.map