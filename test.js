

//vaganar


// const a = ['apple','banana','orange']
// a.unshift('melon')
// console.log(a)



// const obj1 = {

//     property1: 2

//   };

//   Object.seal(obj1);

//   obj1.property1 =4;

//   console.log(obj1.property1);

//   delete obj1.property1;

//////////
// console.log([...[...'ABC']].length)
///////

// var a = 6;

// function test() {

//     var a = 7;

//     function again() {

//         var a = 8;

//         console.log(a);

//     }

//     again();

//     console.log(a);

// }

// test();

// console.log(a);


///////////

// function walk(amount) {

//     return new Promise((resolve,reject) => {
  
//       if (amount > 500) {
  
//         reject ("the value is too big");
  
//       }
  
//       setTimeout(() => resolve(`you walked for ${amount}ms`),amount);
  
//     });
  
//   }
  
//   async function go() {
  
//     const res = await walk(500);
  
//     console.log(res);
  
//     const res2 = await walk(300);
  
//     console.log(res2);
  
//     const res3 = await walk(200);
  
//     console.log(res3);
  
//     const res4 = await walk(700);
  
//     console.log(res4);
  
//     const res5 = await walk(400);
  
//     console.log(res5);
  
//     console.log("finished");
  
//   }
  
//   go();


//////////


// var myObject = {

//     foo: "bar",

//     func: function() {

//         var self = this;

//         console.log("outer func:  this.foo = " + this.foo);

//         console.log("outer func:  self.foo = " + self.foo);

//         (function() {

//             console.log("inner func:  this.foo = " + this.foo);

//             console.log("inner func:  self.foo = " + self.foo);

//         }());

//     }

// };

// myObject.func();


///////

// Nodejs
// setImmediate(function () {

//     console.log('One');
    
//     });
    
//     process.nextTick(function () {
    
//     console.log('Dot');
    
//     });
    
//     console.log('Com');


// Code in myclass.js

// function MyClass(x) {

//     this.value = x;
    
//     return this;
    
//     }
    
//     // code in test.js (in same directory as in myclass.js)
    
    
//     var foo = new MyClass(100);
    
//     var bar = MyClass(100);

//     console.log(foo, bar)
    
   ////////////// 
// const fs = require('fs');

// const foo = require('./3rdparty/foo');

// let logs = '';

// let readFiles;

// function manipulateLogFiles(logFiles, done) {

// readFiles = 0;



// logFiles.forEach((filename) => {

// fs.readFile(filename, 'utf8', (err, data) => {

// logs += data;

// readFiles += 1;

// if (readFiles === logFiles.length) {

// foo(logs, (err) => {

// logs = '';

// readFiles = 0;

// done();

// });

// }

// });

// });

// }


////////


// function doSomething(incoming, outgoing) {

//     let incomingBuffer = '';
    
//     incoming.on('data', (chunk) => {
    
//      incomingBuffer += chunk;
    
//     });
    
//     incoming.on('end', () => {
    
//      outgoing.end(incomingBuffer);
    
//     });
    
//     }
    

//     //////////


//     var x = 0;

// function doSomething(iterations, cb) {

// var y = 0;

// setTimeout(() => {

// cb(null, x + y);

// }, y);

// for (var i = 0; i < iterations; i += 1) {

//  y += 1;

// }

// }

// doSomething(100, (err, result) => console.log(result));


    

// var events = require('events'),

// myEventEmitter = new events.EventEmitter();

// var testEmit = function testEmit() {

// console.log('emitted');

// };

// myEventEmitter.on('testOne', testEmit);

// myEventEmitter.emit('testOne');


// function outeer(){
//    console.log("outer")
//    function innter(){
//       console.log('innter')
//       // function inner1(){
//       //    console.log('innerr')
//       // }
//       // return inner1()
//    }
//    return innter()
// }

// outeer()()


function outer(){
   function inner(){
      console.log('inner')
   }
   return inner()
}

outer()()