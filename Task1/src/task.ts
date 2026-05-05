

//& Question1
type CartItem = {
  name: string
  price: number
  quantity?: number
}

const cartItem : CartItem = {
  name: 'abc',
  price: 20,
  quantity: 5
}

const calculateTotal = ({price: price, quantity: quantity = 1} = cartItem) => {
  return price * quantity
}
//~ console.log('total cost : ', calculateTotal())




//& Question2
type Person = {
  name: string
  age: number
}

type JobDetails = {
  role: string,
  salary: number
}

type Employee = Person & JobDetails

const employee : Employee = {
  name: 'shahdat',
  age: 39,
  role: 'Jonior Engineer',
  salary: 29999
}

const getProfile = (employee : Employee) => {
  return `Name: ${employee.name}, Role: ${employee.role}`
}
//~ console.log(getProfile(employee))





//& Question3
type UserRespone = {
  info?: {
    address?: {
      zipcode?: string
    }
  }
}

const userResponse : UserRespone = {
  info: {
    address:{
      zipcode: 'zipcode'
    }
  }
}

const getZipCode = (userResponse: UserRespone) => {
  return userResponse.info?.address?.zipcode ?? '00000'
}
//~ console.log(getZipCode(userResponse))




//& Question4
let secretValue: unknown = 'typescript is awesome'
const upperValue = (secretValue as string).toUpperCase()
//~console.log(upperValue)



//& Question5
type Constraint = {
  // abc: string
  arr: number[]
}

const constraint : Constraint = {
  // abc: 'shahdat',
  arr: [1, 2, 3, 4, 5, 6]
}

function logLength <T extends Constraint> (input: T){
  return input.arr.length
}
//~ console.log('length = ', logLength(constraint))



//& Question6
type Procuct = {
  id: number,
  name: string,
  price: number
}

const product = {
  id: 101,
  name: 'keyboard',
  price: 49
}

const getProductProp = <T> (obj: T, key: keyof T) => {
  return obj[key]
}
//~ console.log(getProductProp(product, 'price'))




//& Question7
const Colors = {
  primary: 'RED',
  secondary: 'BLUE'
}as const;

type ValidColor = typeof Colors[keyof typeof Colors]

const setColor = (c: ValidColor) => {
  return c
}
console.log('selected color = ', setColor(Colors.primary))





//& Question8
interface MyDocument {
  title: string
  content: string
  author: string
}

type Draft<T> = {
  readonly [key in keyof T]? : T[key]
}

const myDraft: Draft<MyDocument> = {
  title: 'title',
}
console.log(myDraft)



//& Question9

type DataType<T> = T extends any[] ? 'large' : 'small'
type Test1 = DataType<string[]>
type Test2 = DataType<number>



//& Question10
interface UserAccount {
  id: number
  username: string
  password: string
}

type PublicUser = Omit<UserAccount, 'password'>


