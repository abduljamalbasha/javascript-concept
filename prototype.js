/**
 * Prototype:
 * Its attached the object to your original object or function
 * 
The JavaScript prototype property allows you to add new properties to object constructors:
 
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


// // Example1
// //Dont mutate like below this is just for demo
// object2.__proto__ = object
// console.log(object2.__proto__)
// // output: { name: 'jamal', age: 31, getIntro: [Function: getIntro] }
// object2.getIntro()

// // // Example2:
// // object2.prototype = object
// // console.log(object2.prototype)
// // //output: { name: 'jamal', age: 31, getIntro: [Function: getIntro] }
// // console.log(object2.getIntro())



function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.firstName
  }
  
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

const newMethod = new Person("jamal","basha")
console.log(newMethod.name())

