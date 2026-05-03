//& enum


// type Role = 'admin' | 'user' | 'guest'
// const isAccess = (role: Role) => {
//   if(role === 'admin' || role === "user"){
//     return 'you can access all feature!'
//   }else{
//     return 'you can access only guest feature!'
//   }
// }
// console.log(isAccess('user'))


enum Role {
  admin = 'admin',
  user = 'user',
  guest = 'guest'
}

const isAccess = (role: Role) => {
  if(role === Role.admin || role === Role.user){
    return 'you can access all feature!'
  }else{
    return 'you can access only guest feature!'
  }
}
console.log(isAccess(Role.admin))

