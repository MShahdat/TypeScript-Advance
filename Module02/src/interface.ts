//& interface type VS type alias

//! interface work only object type [object, function, array] 


//& type alias
type tUser = {
  name: string
  age: number
}

type tRole = {
  role: 'admin' | 'user'
}

type tUserRole = tUser & tRole

const tuser: tUserRole = {
  name: 'shahdat',
  age: 39,
  role: "admin"
}


//& interface type
interface User {
  name: string
  age: number
}

interface Role {
  role: 'admin' | 'user' | 'guest'
}

interface UserRole extends User {
  role: 'admin' | 'user' | 'guest'
}

const user: UserRole = {
  name: 'shahdat',
  age: 30,
  role: 'admin'
}



//& type alias
type Fruits = string[]
const fruits: Fruits = ['A', 'B', 'C']



//& interface type
interface Friends {
  [index: number]: string
}
const friends: Friends = ['pintu', 'mintu', 'jontu']




//& type alias
type Add = (a: number, b: number) => number
const add: Add = (a, b) => {
  return a + b
}



//& interface type
interface Sum {
  (a: number, b: number): number
}
const sum: Sum = (a, b): number => {
  return a + b
}