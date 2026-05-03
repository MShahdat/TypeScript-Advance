"use strict";
//& enum
Object.defineProperty(exports, "__esModule", { value: true });
// type Role = 'admin' | 'user' | 'guest'
// const isAccess = (role: Role) => {
//   if(role === 'admin' || role === "user"){
//     return 'you can access all feature!'
//   }else{
//     return 'you can access only guest feature!'
//   }
// }
// console.log(isAccess('user'))
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role["user"] = "user";
    Role["guest"] = "guest";
})(Role || (Role = {}));
const isAccess = (role) => {
    if (role === 'admin' || role === "user") {
        return 'you can access all feature!';
    }
    else {
        return 'you can access only guest feature!';
    }
};
console.log(isAccess(Role.admin));
//# sourceMappingURL=enum.js.map