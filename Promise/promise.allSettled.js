
/**
 * Promise.allSettled()
The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected,
 with an array of objects that each describes the outcome of each promise.
 */

 //Example

const promise1 = Promise.resolve([{message:"I am promise1",name:"jamal"}])
const promise2 = 10
const promise3 = new Promise((resolve, reject) =>{
    resolve('I am promise3')
})
const promise4 = Promise.reject('I am promise4')
const promise5 = Promise.resolve()

Promise.allSettled([promise1, promise2, promise3, promise4,promise5])
.then((value)=>{
    console.log("value:",value)
})

const PromiseSettleFunction = async () =>{
    const values = await Promise.allSettled([
        Promise.resolve(33),
        new Promise(resolve => setTimeout(() => resolve(66), 0)),
        99,
        Promise.reject(new Error('an error'))
      ])
      console.log("second Value:",values)
}

PromiseSettleFunction()

// // Output:
// value: [
//     { status: 'fulfilled', value: [ [Object] ] },
//     { status: 'fulfilled', value: 10 },
//     { status: 'fulfilled', value: 'I am promise3' },
//     { status: 'rejected', reason: 'I am promise4' },
//     { status: 'fulfilled', value: undefined }
//   ]

//   second Value: [
//     { status: 'fulfilled', value: 33 },
//     { status: 'fulfilled', value: 66 },
//     { status: 'fulfilled', value: 99 },
//     {
//       status: 'rejected',
//       reason: Error: an error
//           at PromiseSettleFunction (/Users/abduljamalbasha/personal/javascript/javascript-concept/Promise/promise.allSettled.js:28:24)
//           at Object.<anonymous> (/Users/abduljamalbasha/personal/javascript/javascript-concept/Promise/promise.allSettled.js:33:1)
//           at Module._compile (node:internal/modules/cjs/loader:1101:14)
//           at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//           at Module.load (node:internal/modules/cjs/loader:981:32)
//           at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//           at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//           at node:internal/main/run_main_module:17:47
//     }
//   ]