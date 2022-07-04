// let output = identity("myString"); //output : "myString"
// let output1 = identity(9); // output : 9
// let output2 = identity({a:1}) // output : {a:1}

output:
// function identity (args):Type{
// return args
// }

function identity<Type>(arg: Type): Type {
    return arg;
  }

console.log(identity([1,"a",{a:1}]))