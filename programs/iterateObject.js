// const UserObj = {
//     firstName:"Jamal",
//     lastName:"Basha",
//     age:30,
//     gender:'male'
// }


// for(let item in UserObj){
//     console.log("item:",item)
// }

const items = {
    'first': new Date(),
    'second': 2,
    'third': 'test'
  }

  for (const item in items) {
    console.log(item)
  }


// Object.entries(items).map(item => {
//     console.log(item[1])
//   })
  
//   Object.entries(items).forEach(item => {
//     console.log(item)
//   })
  
  for (const [key,value] of Object.entries(items)) {
    console.log(key,value)
  }