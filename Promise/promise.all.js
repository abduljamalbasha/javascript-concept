
/**
 * Promise.all()
 * The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
 * This returned promise will resolve when all of the input's promises have resolved, 
 * or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error,
 * and will reject with this first rejection message / error.
 */

//Example Program promise.all()

const promise1 = Promise.resolve("I am promise1")
const promise2 = 10
const promise3 = new Promise((resolve, reject) =>{
    resolve('I am promise3')
})

Promise.all([promise1, promise2, promise3])
.then((value)=>{
    console.log("value:",value)
})


// Output:
// value: [ 'I am promise1', 10, 'I am promise3' ]