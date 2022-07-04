/**
 * Arrow functions
 * ES6 introduced a new and shorter way of declaring an anonymous function, which is known as Arrow Functions.
 *  In an Arrow function, everything remains the same, except here we don’t need the function keyword also. Here, 
 * we define the function by a single parenthesis and then ‘=>’ followed by the function body.
 * 
 */


// const ArrowFunc = () =>{
//     console.log("Hello Am Arrow funtion")
// }

// ArrowFunc()


var firstName = 'basha';

const mydetails = {
  firstName: 'Jamal',
  printName: function () {
    console.log(`Hello ${this.firstName}`);
    let mywishlist = () => {
      console.log(`Whishlist: ${this.firstName}`);
    };
    mywishlist();
  },
  arrowFun: () => {
    // let firstName = 'basha'
    console.log(`Arrow Hello ${this.firstName}`);
    // console.log(`Arrow Hello ${firstName}`)
  },
};

// mydetails.printName()
// //Hello Jamal

mydetails.arrowFun()
// // Arrow Hello undefined
// // Arrow Hello basha



mydetails.printName();
