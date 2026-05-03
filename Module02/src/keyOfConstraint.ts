//& keyof: type operation


type RichUser = {
  car: string
  bike: string
  plane: string
  track: string
}

type PoorUser1 = 'bike' | 'car' | 'track'
// const poorU: PoorUser = "track" 

type PoorUser2 = keyof RichUser
const poorU : PoorUser2 = 'plane'



type User = {
  id: number
  name: string
  address: {
    city: string
    house: string
  }
}

const user = {
  id: 23,
  name: 'x',
  address: {
    city: 'dhaka',
    house: 'abc'
  }
}

// console.log(user.address.city)


// type Key = keyof User
type Key = keyof Product

const getProperty = <T> (obj: T, key: keyof T) => {
  return obj[key]
}


type Product = {
  id: number
  name: string
  price: number
  category: string
  rating: number
}

const product : Product = {
  id: 39,
  name: 'iron',
  price: 39,
  category: 'electronics',
  rating: 3.5
}

const student = {
  id: 39,
  name: 'shahdat'
}

// console.log(getProperty(user, 'address'))
console.log(getProperty(student, 'name'))


