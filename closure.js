/**
 * A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function's scope from an inner function. 
 * In JavaScript, closures are created every time a function is created, at function creation time.
 * 
 * you can able to access the clouser function and variable outside the clouser futnion
 */


function GetAge(){
    let age = 30
    const incrementAge = () =>{
        age += 1
        console.log("My age is:", age)
        
        const test = ()=>{
            console.log("age1:",age)
            const test =()=>{
                console.log("age2:",age)
            }
            test()
        }
        test()
    }
    const reset = () =>{
        age = 30
        console.log("My age is reset:",age)
    }
    return {
        incrementAge,
        reset
    }
}

const obj = GetAge()

obj.incrementAge()
obj.incrementAge()
obj.incrementAge()
obj.reset()
obj.incrementAge()

// //Output :
// My age is: 31
// My age is: 32
// My age is: 33
// My age is reset: 30
// My age is: 31


// const test = [1,2,3,4]
// const a = test.reduce((acc, curr) =>
//     ({...acc, [curr]:curr}),{}
// )
// console.log(a)

