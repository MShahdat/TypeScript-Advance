//& interface type VS type alias

//! interface work only object type [object, function, array] 


//& type alias with intersection
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


//* type alias is better compare to interface for 'object intersection' 
//& interface type for object
interface User {
  name: string
  age: number
}

interface Role {
  role: 'admin' | 'user' | 'guest'
}

interface UserWithRole extends User {
  role: 'admin' | 'user' | 'guest'
}

const user: UserWithRole = {
  name: 'shahdat',
  age: 30,
  role: 'admin'
}



//& type alias for array
type Fruits = string[]
const fruits: Fruits = ['A', 'B', 'C']



//& interface type for array
interface Friends {
  [index: number]: string
}
const friends: Friends = ['pintu', 'mintu', 'jontu']




//& type alias for function
type Add = (a: number, b: number) => number
const add: Add = (a, b) => {
  return a + b
}
console.log(add(3, 9))



//& interface type for function
interface Sum {
  (a: number, b: number): number
}
const sum: Sum = (a, b): number => {
  return a + b
}