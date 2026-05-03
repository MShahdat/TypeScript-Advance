
//& ? => turnary operator => decision making
//* ?? => nullish coalescing operator
//~ ? => optional chainig


//& ? => turnary operator
const isMarried = (age: number) => {
  const res =  age > 20 ? 'you are permitted to merried' : "you aren't permitted to married"
  console.log(res)
}
isMarried(20)



//& ?? => nullish coalescing operator => null / undefined
//* The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand operand when the left-hand operand is null or undefined


//~ let theme = 'dark'  // output => dark
let theme  // output => light
let selectTheme = theme ?? 'light'
console.log(`your selected theme :  ${selectTheme}`)




//& ? => optional chaining (already practiced in object part)



