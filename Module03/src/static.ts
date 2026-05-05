//& static => same memory reference use for all instance


//& without static 
class Counter {
  count : number = 0

  increment () {
    return ++this.count
  }
}

const instance1 = new Counter() 
// console.log(instance1.increment()) // 0 => 1
// console.log(instance1.increment()) // 1 => 2
// console.log(instance1.increment()) // 2 => 3


const instance2 = new Counter()
// console.log(instance2.increment()) // 0 => 1 
// console.log(instance2.increment()) // 1 => 2
// console.log(instance2.increment()) // 2 => 3


//& with sataic
class Counter1 {
  static count : number = 0

  static increment () {
    return ++Counter1.count
  }
  static decrement () {
    return --Counter1.count
  }
}

// const sInstance = new Counter1()
// console.log(sInstance.increment())
// console.log(sInstance.increment())
// console.log(sInstance.increment())


// const sInstance2 = new Counter1()
// console.log(sInstance2.increment())
// console.log(sInstance2.increment())

// const sInstance3 = new Counter1()
// console.log(sInstance2.decrement())
// console.log(sInstance2.decrement())


console.log(Counter1.increment())
console.log(Counter1.increment())
console.log(Counter1.increment())
console.log(Counter1.decrement())
console.log(Counter1.decrement())
console.log(Counter1.decrement())
console.log(Counter1.decrement())
console.log(Counter1.decrement())
