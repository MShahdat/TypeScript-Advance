//& enum


type Role1 = 'admin' | 'user' | 'guest'
const isAccess1 = (role: Role1) => {
  if(role === 'admin' || role === "user"){
    return 'you can access all feature!'
  }else{
    return 'you can access only guest feature!'
  }
}
console.log(isAccess1('user'))





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

