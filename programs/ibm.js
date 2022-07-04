
// //Example program for arrow funtion and traditional function with this keyword
// const someobject = {
//     name:"jamal",
//     arrowfunc : ()=>{
//         console.log("hello ",this.name)
//     },
//     normalfunc(){
//         console.log("hello ",this.name)
//     }
// }

// someobject.arrowfunc()
// someobject.normalfunc()



// let obj = {a: '1'}; 
// let b = obj;
// // let b = {...obj,b:"hi"}

// console.log(obj);// {a:'1',b:'hi'}
// console.log(b);//  {a:'1',b:'hi'}


// var array = [67, 22, 10, 5, 44, 8]
//Get Second largest value from the array

 var X = { Foo : 1};
 let Output = (function() 
 { 
 delete X.Foo; 
 return X.Foo;
 } 
 )();
 
 console.log(Output);
 console.log(X);

 // When trying to delete a property that does not exist, true is returned
 console.log(delete X.test)

 
 
 
 