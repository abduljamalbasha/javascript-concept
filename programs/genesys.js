// Given two strings s and t, return true if they are equal when both are typed into empty text editors.
// '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"

// Output: true
// Explanation: Both s and t become "ac".

// var s = ['a', 'b', '#', 'c'];

// var b = [];

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:
// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// // Stack


let s = 'ad#b',
  t = 'ab#b';
// stack.push(sA.pop().includes('#'));
console.log(s.split('#').pop());
console.log(t.split('#').pop());

if (t.split('#').pop() === s.split('#').pop()) {
  console.log(true);
} else {
  console.log(false);
}

let s1 = 'ab##',
  t1 = 'c#d#';

console.log("s1.split('#').pop():", s1.split('#').pop());
console.log("s1.split('#').pop():", t1.split('#').pop());

if (s1.split('#').pop() === t1.split('#').pop()) {
  console.log(true);
} else {
  console.log(false);
}

let s3 = 'a#c',
  t3 = 'b';

console.log("s3.split('#').pop():", s3.split('#').pop());
console.log("t3.split('#').pop():", t3.split('#').pop());
if (s3.split('#').pop() === t3.split('#').pop()) {
  console.log(true);
} else {
  console.log(false);
}



/*********************************** */

function Pet(name){
    this.name = name
    this.getName =() => this.name
}
const cat = new Pet("Fluffy")
console.log(cat.getName())
const { getName }  = cat
console.log(getName())

// Output: 
// Fluffy
// fluffy

/*********************************** */

const object = {
    message: "Hello World!",
    logMessage(){
        console.log(this.message)
    }
}
setTimeout(object.logMessage, 1000);

//Output: undefined after one second
//Because this keyword contain the reference of that function object only

/*********************************** */

const numbers = [10,5,11]
console.log(numbers.sort())

// number will sort base on the unicode

/*********************************** */

// Question:
((...a,ab)=>a)(5,2,5)
console.log(((ab,...a)=> a)(5,2,5))
//You will get Error because Rest parameter must be last format parameter
/*********************************** */

let output = identity("myString"); //output : "myString"
let output1 = identity(9); // output : 9
let output2 = identity({a:1}) // output : {a:1}

// output:
// function identity<Type>(arg: Type): Type {
//     return arg;
//   }

console.log(identity([1,"a",{a:1}]))

/*********************************** */


// let a = [2, 8, 1, 0, 9, 5];

// const sleep=(o) =>new Promise(r => setTimeout(r, o * 1000));
// const pause = async (y) => {await sleep(y); console.log(y)}
// const play = async(i=0)=>{for(;i<a.length;) (await pause(i*a[i++]))}

// play();

// let a = [2,8,1, 0,9,5];
// const sleep=(o) => new Promise(r => setTimeout(r, o * 1000));
// const pause = async (y) => { await sleep(y); console.log(y)}

// const play = (i=0)=>{for(;i<a.length;){pause(i*a[i++]);}}
// play();

/************************************************ */

let count = 0;
(function imemediate(){
    if(count === 0){
        let count = 1;
        console.log(count)
    }
    console.log(count)
})();

//Output: 1 0

/************************************************ */

(function immediateA(a){
    return (function immediateB(b){
        console.log(a)
    })(1)
})(0)

//Output: 0

/************************************************ */

let i;
for (i=0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }
    setTimeout(log,100)
}

//Output 
// 0
// 3
// 3
// 3

/************************************************ */

const length = 4;
const numbers = []
for (var index = 0; index < length; index++); {
    numbers.push(index + 1)
}
console.log(numbers)

// //Output
// 0
// [5]

/************************************************ */

console.log(sequare(5));
var sequare = function(n){
    return n * n;
}

//ReferenceError: Cannot access 'sequare' before initialization

var a = 10
function foo(){
    if(true){
        let a = 4
    }
    alert(a)
}
foo()

pi = 3.14
function circum(radius){
    pi= 3.14159
    console.log(2 *  pi *  radius)
}
circum(2)
//output : 12.56636


function foo(){
    let a=b=0;
    a++;
    console.log(typeof a)
    console.log(typeof b)
    return a;
}
foo()