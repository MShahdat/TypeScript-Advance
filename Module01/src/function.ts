
//& function
//& (normal function & arrow function)


function add (a: number, b: number) : number{
  return a + b
}
const res = add(4, 5)
//~ console.log(res)




//& arrow function

const addArrow = (a: number, b: number) : number => {
  return a + b
}
//~ console.log(addArrow(4, 43))




//& object => function => method

const poor = {
  name: 'shahdat',
  balance: 0,
  addBalance(amount: number){
    return this.balance + amount;
  }
}
poor.balance = poor.addBalance(49999)
//~ console.log(`current balance is : ${poor.balance}`)
poor.balance = poor.addBalance(999)
//~ console.log(`current balance is : ${poor.balance}`)




const arr : number[] = [1, 3, 4];
const square = arr.map((item) => item * item)
console.log(square)
