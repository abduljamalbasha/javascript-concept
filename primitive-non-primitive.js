/**
 * In Javascript there are two type of data type
 * 1- primitive
 * 2- non-primitive
 * 
 * primitive: Primitive data type containes only the single value, and it is not mutable, for example if you create a avariable 
 * var a=0;
 * a =10
 * The variable ‘a’ refers to a single value in memory. If we want to change the value of a, we would have to assign a new value to a.  
 * Primitive data types are not mutable.
 */

 var a = 10
 a=20
 var b = a
 console.log(a)

console.log(a===b)


//Non-Primitive 
//it will holds the key value pair object 
/**
 * JavaScript non-primitive types are objects. An object holds a reference/address of a single key-value pair or many key-value pairs. 
 * Whenever we refer to an object, we refer to an address in memory which contains the key-value pair. 
 * If we assign an object ‘object1’ to another object ‘object2’, we are actually assigning the address of ‘object1’ to ‘object2’ 
 * instead of the key-value pair which the ‘object1’ contains in memory. Let’s see below”.
 */

 var object1= {a:5, a1:6};

 var object2 = object1;
 console.log(object1)
 console.log(object2)

console.log(object1 === object2)
//The above statement assigns the address of object2 to object1, and not the value {a:5, a1:6}. 
//Thus with this assignment ‘object1’ and ‘object2’ refer to the same address in memory.

//Example 2
var object3 = {a:5,a1:6}
var object4 = {a:5,a1:6}

console.log(object3 === object4)
//It wlll show false because it will share two different memory
//This statement object1===object2 // would return a false because both the objects refer to two separate addresses in memory. 
//When we compare two objects, we compare their addresses, not their values.




var a = null;
console.log(a);   // This returns null
console.log(typeof a) // The type of null value is object not null


// Symbol:
// The ‘symbol’ data type is new in es6. It is one of the new features of es6. The symbol data type defines a property of an object which is private to the object. It refers to the ‘key’ of the key-value pair of an object.

var object1 = {
   name: 'Shalini',
   age: 25,
   city: "Mumbai"
}
var occupation=Symbol("engineer");

console.log(object1)
console.log(occupation)


//Function type:
function a (){
    console.log('am a funtion')
}

console.log("type of function is:",typeof a)
//output: type of function is: object
