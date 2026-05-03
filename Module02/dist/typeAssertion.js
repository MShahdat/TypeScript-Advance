"use strict";
//& Type assertion 
Object.defineProperty(exports, "__esModule", { value: true });
//! doesn't show any error! but this is not good
const some = 45;
const abc = some.length;
console.log(abc); // output: undefined
//* When I confirm what will be type then I used type assertion
const str = 'shahdat';
const len = str.length;
const MToCM = (value) => {
    if (typeof value === "number") {
        return value * 1000;
    }
    else if (typeof value === 'string') {
        const [val] = value.split(" ");
        return Number(val) * 1000;
    }
};
const res1 = MToCM(3);
console.log(res1, 'cm');
const res2 = MToCM('19 M');
console.log(res2, 'cm');
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=typeAssertion.js.map