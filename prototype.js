/**
 * Prototype:
 * Its attached the object to your original object or function
 
 */

let arr = ['jamal','basha']

let object = {
    name:"jamal",
    age:31,
    getIntro : function (){
        console.log("Hello",this.name)
    }
}

let object2={
    name:"basha"
}

// Example1
//Dont mutate like below this is just for demo
object2.__proto__ = object
console.log(object2.__proto__)
// output: { name: 'jamal', age: 31, getIntro: [Function: getIntro] }
object2.getIntro()

// // Example2:
// object2.prototype = object
// console.log(object2.prototype)
// //output: { name: 'jamal', age: 31, getIntro: [Function: getIntro] }
// console.log(object2.getIntro())