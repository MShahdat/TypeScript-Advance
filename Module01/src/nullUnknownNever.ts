
//& nullable, unknown, never, void type

//& nullable type
const getUser = (user: (string | null)) => {
  if(user){
    console.log(`this user name is : ${user}`)
  }else{
    console.log(`show all user from database!`)
  }
}
getUser('asdf')




//& unknown type
const discount = (amount: unknown) => {
  let dis 
  if(typeof amount === 'number'){
    dis = amount * 0.1
  }else if(typeof amount === 'string'){
    const pr = (amount.split(" "))
    dis = Number(pr[0]) * 0.1
    console.log(pr)
  }else{
    dis
  }
  return dis
}

//~ const disc = discount('200 tk')   //output : 20
const disc = discount(200)  // output: 20
//~ const disc = discount(null) // output : 0
console.log('discount price is : ', disc ?? '0')





//& never type
const errFun = (msg: string) : never => {
  throw new Error(msg)
}
//~ errFun('there was an error!')



//& void type 
const show = (msg: string) : void => {
  console.log(msg)
}
show('printed message!')





