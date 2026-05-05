//& type guard / type narrowing

type neumeric = number | string
const add = (num1: neumeric, num2: neumeric) => {
  if(typeof num1 === 'number' && typeof num2 === 'number'){
    return num1 + num2
  }else{
    return num1.toLocaleString() + num2.toLocaleString()
  }
}

console.log(add(2, 3)) //5
console.log(add(2, '3')) //23
console.log(add('2', 3)) //23
console.log(add('2', '3')) //23




//& in type guard
type User = {
  name: string
}

type Admin = {
  name: string
  role: 'Admin'
}


const getInfo = (info: User | Admin) => {
  if('role' in info){
    console.log(`${info.name} is an ${info.role}`)
  }else{
    console.log(`${info.name} is a normal user`)
  }
}

getInfo({name: 'rakib'}) 
getInfo({name: 'manik', role: 'Admin'})

