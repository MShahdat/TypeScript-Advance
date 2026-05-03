//& array & object

let list : string[] = ['apple', 'mango']
list.push('orange')
//! list.push(1)  not assignable number



let mixed : (string | number | boolean)[] = [2, 'milk', 4, 'sugar', true]
mixed.push(3)
mixed.push('asd')
mixed.push(false)
//~ console.log(mixed)




//& tuple

let cooradinate : [number, number] = [39, 59]
//! cooradinate[0] = 'shahdat';
cooradinate[0] = 30
//~ console.log(cooradinate)

let move : [string, string, string, number] = ['dkhaka', 'chandpur', 'bia launch', 3]

move.push('asd')
move.push('a-4asdf')
move.push(4)
//~ console.log(move)

let studentInfo : [number, string] = [20, 'shahdat']



//& objects
const user : {
  firstName: string
  middleName?: string  // optional type
  lastName: string
  organization: 'safayat store' // value => type : literal type
} = {
  firstName: 'Sheikh',
  //~middleName: 'Safayat',
  lastName: 'Ridoy',
  organization: 'safayat store'
}
//! user.organization = 'asdf'


const user1 : {
  firstName: string
  middleName?: string  // optional type
  lastName: string
  readonly organization: string  // access modifire
} = {
  firstName: 'Sheikh',
  //~middleName: 'Safayat',
  lastName: 'Ridoy',
  organization: 'safayat store'
}

//! user1.organization = 'asdf'
console.log(user1)



type Person = {
  name: string
  id: number
  dept: string
}

const student : Person = {
  name : 'shahdat',
  id: 39,
  dept: 'cse'
}
//! if one or more property missing that will be error











