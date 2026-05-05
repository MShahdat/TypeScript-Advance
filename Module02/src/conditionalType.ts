//& conditional type => if one type is depends on another type

type A = null
type B = undefined
type C = A extends number ? true : B extends null ? true : false;



type RichMan = {
  bike: string
  car: string
  ship: string
}
type CheckVihicle <T> = T extends keyof RichMan ? true : false
type hasBike = CheckVihicle<'asd'>
