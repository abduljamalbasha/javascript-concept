/**
 * 
 * @returns 
 */

const one = () =>{
    return "I am one"
}

// const dos = () =>{
//     setTimeout(() => {
//         return "I am two"
//     }, 5000);
// }

//Refactor for Promise
const dos = () =>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("I am two")
    }, 3000);
  })
}

const three = () =>{
    return  "I am three"
}

const callme = async () =>{
    let valueOne = one()
    console.log("valueOne:",valueOne)

    let valueTwo = await dos()
    console.log("valueTwo:",valueTwo)

    let valueThree = three()
    console.log("valueThree:",valueThree)
}

callme()