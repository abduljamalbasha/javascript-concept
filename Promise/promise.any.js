/**
 * Promise.any()
Promise.any() takes an iterable of Promise objects. 
It returns a single promise that resolves as soon as any of the promises in the iterable fulfills,
 with the value of the fulfilled promise. If no promises in the iterable fulfill (if all of the given promises are rejected), 
 then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors.
 */

 

//Example Program promise.any()

const promise1 = Promise.reject("I am promise1")
const promise2 = 10
const promise3 = new Promise((resolve, reject) =>{
    reject('I am promise3')
})

Promise.any([promise1, promise2, promise3])
.then((value)=>{
    console.log("value:",value)
})


// Output:
// value: 10


/**
 * if all the promise rejected it will rerutn with
[AggregateError: All promises were rejected]
 */