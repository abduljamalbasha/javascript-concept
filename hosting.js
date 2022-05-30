/**
 * Hoisting:
 * Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
    It allows us to call functions before even writing them in our code. 
    Note: JavaScript only hoists declarations, not the initializations.

    JavaScript allocates memory for all variables and functions defined in the program before execution.
 */

// Variable lifecycle
let a;        // Declaration
a = 100;      // Assignment
console.log(a);  // Usage

function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
 
console.log(a); // 10
console.log(b); // ReferenceError : b is not defined