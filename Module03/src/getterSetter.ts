//& getter & setter

class BankAccount {
  readonly id: string
  username: string
  private _balance: number

  constructor(id: string, username: string, balance: number) {
    this.id = id
    this.username = username
    this._balance = balance
  }

  //& set method
  // addBalance(amount: number) {
  //   return this._balance = this._balance + amount
  // }
  set addBalance (amount: number){
    this._balance = this._balance + amount
  }

  //& get method
  // showBalance() {
  //   console.log(`total current balance = ${this._balance}`)
  // }
  get showBalance () {
    return this._balance
  }
}

// shahdat.showBalance()
// shahdat.addBalance(2)
// shahdat.showBalance()


const shahdat = new BankAccount('Acc432', 'shahdat', 29)
shahdat.addBalance = 20
shahdat.addBalance = 1
console.log(shahdat.showBalance)
console.log(shahdat)

