//& access modifire

class BankAccount {
  readonly id: string
  username: string
  private _balance: number

  constructor(id: string, username: string, balance: number) {
    this.id = id
    this.username = username
    this._balance = balance
  }

  addBalance(amount: number) {
    return this._balance = this._balance + amount
  }

  showBalance() {
    console.log(`total current balance = ${this._balance}`)
  }
}


class StudentAccount extends BankAccount{
  test () {
    //* balance access if it protected. 
    // console.log(`total current balance = ${this.balance}`)
  }
}

const shahdat = new BankAccount('Acc432', 'shahdat', 29)
//! shahdat['id'] = 'change id'

console.log(shahdat.id)
//! shahdat.balance = 300
shahdat.addBalance(200)
//! console.log(`total current balance = ${shahdat.balance}`)

//! shahdat.balance = 30


shahdat.showBalance()
shahdat.addBalance(2)
shahdat.showBalance()