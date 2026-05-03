//& mapped types

//* map loop
const arNum: number[] = [1, 2, 4, 5, 8]
const arStr: string[] = ['a', 'b', 'c']

const arrStrMap = arNum.map((item) => {
  return item.toString()
})

console.log(arrStrMap)




//* map type
type arrNum = {
  id: number
  age: number
  class: number
}

type arrStr = {
  id: string
  age: string
}

type arrString = {
  // [key in 'id' | 'age'] : string
  [key in keyof arrNum] : string
}



type Info <T> = {
  [key in keyof T] : T[key]
}


const user1 : Info<{id: number, age: number, class: string}> = {
  id: 49,
  age: 39,
  class: 'ten'
}






