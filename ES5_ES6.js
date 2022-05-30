/**
 * 
 * 1. ECMAScript 5 (ES5P) : 
    ES5 is also known as ECMAScript 2009 as it is released in 2009. 
    It is a function contractors focus on how the objects are instantiated.
     For ES5 you have to write function keyword and return, 
     to be used to define the function, like normal general JavaScript language. 

2. ECMAScript 6 (ES6) : 
ES6 is also known as ECMAScript 2015 as it is released in 2015. 
Its class allows the developers to instantiate an object using the new operator,
 using an arrow function, 
 in case it doesn’t need to use function keyword to define the function, 
 also return keyword can be avoided to fetch the computer value. 

 ES6 features.
1. let and const Keywords
2. Arrow Functions
3. Multi-line Strings
4. Default Parameters
5. Template Literals
6. Destructuring Assignment
7. Enhanced Object Literals
8. Promises
9. Classes
10. Modules

 */

// ES6 Example
    let a, b, c;
    const d = 10, e =20 ,f=30;
    console.log(a,b,c,d,e,f)

//Arrow function
const arrowFunc = () =>{
    console.log(' am arrow function example')
}

//Multi-line Strings
const multiLineSting = `hello
ayana 
how are you`
console.log(multiLineSting)

//Default Parameters
let a1 = 20;

/**
 * Template Literals are literal words in programming that are used to represent some kind of fixed value and template means a blueprint that can generate some entity,
 *  Therefore, the template literals are used to generate strings of a fixed value. These are delimited with the backticks ` `
 */

 const str1 = `Hi, GeeksforGeeks Learner`;
 console.log(str1);
   
 const str = "GeeksforGeeks";
 const str2 = `Hi, ${str} Learner`;
 console.log(str2);

 //Destructring
 const objectA = {name:"Ayana", age:"6 months"}
 const {name, age} = objectA
 console.log(`Hello I am ${name} and I am ${age} old`)


 /**
  * Enhancement Object Literals
  * Object literal enhancement is used to group variables from the global scope and form them into javascript objects.
  * It is the process of restructuring or putting back together.
  */

 const b1 =  20
 const c1 = 30
 const d1 = 40
 const ObjectLiteral = {b1,c1,d1}
 console.log("ObjectLiteral:",ObjectLiteral)
 //ObjectLiteral: { b1: 20, c1: 30, d1: 40 }

 //Promise
 const promise = new Promise((resolve,reject)=>{
     resolve("am resolve")
 }).catch((error)=>{
    reject("am reject"+error)
 })


/**
 * Classes:
 * Classes are one of the features introduced in the ES6 version of JavaScript.
A class is a blueprint for the object. You can create an object from the class.
You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.
Since many houses can be made from the same description, we can create many objects from a class.
 */

// constructor function
function Person () {
    this.name = 'Ayana',
    this.age = 1
}

// create an object
const person1 = new Person();
console.log("person1:",person1)

// creating a class
class Person2 {
    constructor(name,age) {
      this.name = name;
      this.age = age
    }
  }

// creating an object
const person2 = new Person2('Ayana',1);
const person3 = new Person2('Jamal',31);

console.log(person2.name, person2.age); // Ayana 1
console.log(person3.name, person3.age); // Jamal 31


/**
 * Module
 *  JavaScript modules are the best implementation of Closure. 
 * Modules are small units of independent, reusable code that is desired to be used as the building blocks in creating a non-trivial Javascript application. 
 * Modules let the developer define private and public members separately, making it one of the more desired design patterns in JavaScript paradigm.
 * You may see modules as Classes as in any other Object-Oriented Programming Language.
 */