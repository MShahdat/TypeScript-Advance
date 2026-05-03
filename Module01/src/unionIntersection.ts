
//& union and intersection


//& union type
type Role = 'admin' | 'user' | 'guest'

const show = (role: Role) => {
  if(role === 'admin'){
    console.log('nevigate admin page')
  }else if(role === 'user'){
    console.log('nevigate user page')
  }else{
    console.log('navigate guest page')
  }
} 
//~ show('guest')





//& intersection type
type Employee = {
  id: string
  name: string
}

type Manager = {
  salary: number
  phone: string
  experience: number
}

type EmployeeManager = Employee & Manager

const employeeManager : EmployeeManager = {
  id: '39',
  name: 'Shahdat',
  salary: 3000030,
  phone: '01843',
  experience: 4,
}

console.log(employeeManager)

