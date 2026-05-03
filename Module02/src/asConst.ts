//& as const: assertion

const Role = {
  admin: 'ADMIN',
  user: 'USER',
  guest: 'GUEST'
} as const

/*
1. typeof Role =>
  {
    admin: string
    user: string
    guest: string
  }

2. keyof Role =>
  'admin' | 'user' | 'guest'

*/

const isAccess = (role: typeof Role[keyof typeof Role]) => {
  if (role === Role.admin || role === Role.user) {
    return 'you can access all feature!'
  } else {
    return 'you can access only guest feature!'
  }
}
console.log(isAccess(Role.admin))