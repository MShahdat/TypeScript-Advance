//& Type alias 

type User = {
  id: number
  name: {
    first: string
    middle?: string
    last: string
  },
  Gender: 'Male' | 'Female',
  education: {
    ssc: {
      name: string
      board: string
      result: {
        Bangla: string
        Math: string
      }
    },
    hsc: {
      name: string
      gpa: number 
    },
    bachalor: {
      name: string
      cgpa: number
    }
  }
} 

const user1 : User = {
  id: 48,
  name: {
    first: 'Md.',
    middle: 'Shahdat',
    last: 'Hossain'
  },
  Gender: 'Male',
  education: {
    ssc: {
      name: 'charkalia High School',
      board: 'Comilla',
      result: {
        Bangla: 'A+',
        Math: 'A+',
      }
    },
    hsc: {
      name: 'Dania Collage',
      gpa: 4.00
    },
    bachalor: {
      name: 'Green University of Bangladesh',
      cgpa: 0.00
    }
  }
} 

const user2 : User = {
  id: 94,
  name: {
    first: 'Sheikh',
    last: 'Ridoy'
  },
  //! Nationality: 'Bangladesh',  
  Gender: 'Male',
  education: {
    ssc: {
      name: 'Feni Govt. School',
      board: 'Comilla',
      result: {
        Bangla: 'A+',
        Math: 'A',
      }
    },
    hsc: {
      name: 'Dania Collage',
      gpa: 5.00
    },
    bachalor: {
      name: 'Green University of Bangladesh',
      cgpa: 4.00
    }
  }
} 

//~ console.log('information of user1 : ', user1)
//~ console.log('information of user2 : ', user2)


//& type alias for function


type Add = (a: number, b: number) => number
const add : Add = (a, b) => a + b 
console.log(`summation of : `, add(30, 40))