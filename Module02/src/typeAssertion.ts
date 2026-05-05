//& Type assertion 


//! doesn't show any error! but this is not good
const some: any = 45;
const abc: number = (some as string).length
console.log(abc) // output: undefined


//* When I confirm what will be type then I used type assertion
const str: any = 'shahdat'
const len: number = (str as string).length


//* meter to centemeter converter
const MToCM = (value: string | number) => {
  if(typeof value === "number"){
    return value * 1000
  }else if(typeof value === 'string'){
    const [val] = value.split(" ");
    return Number(val) * 1000
  }
}
const res1 = MToCM(3) as number;
console.log(res1, 'cm')
const res2 = MToCM('19 M') as number
console.log(res2, 'cm')




type error = {
  message: string;
}

try{

}catch(err){
  console.log((err as error).message)
}