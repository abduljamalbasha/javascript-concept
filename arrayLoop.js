const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

// console.log(numbers)
// console.log(txt)


//Map 
/**
 * The map() method creates a new array by performing a function on each array element.
   The map() method does not execute the function for array elements without values.
   The map() method does not change the original array.
 */

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
// console.log(numbers2)



/**
 * Filter()
 * The filter() method creates a new array with array elements that passes a test.


 */

 const numbers3 = [45, 4, 9, 16, 25];
 const over18 = numbers3.filter(myFunction);
 
 function myFunction(value, index, array) {
   return value > 18;
 }

 console.log("over18:",over18)


 /**
  * reduce() 
  * The reduce() method runs a function on each array element to produce (reduce it to) a single value.
  * The reduce() method works from left-to-right in the array. See also reduceRight().
  */

  const numbers4 = [45, 4, 9, 16, 25];
  let sum = numbers4.reduce(myFunction);
  
  function myFunction(total, value, index, array) {
    console.log(total)
    return total + value;
  }

  console.log("sum:",sum)


  





  


  const users = [
    {firstname:'Abdul',lastName:"Jamal",age: 31},
    {firstname:'Sameera',lastName:"Kouser",age: 24},
    {firstname:'Ayana',lastName:"Jamal",age: 6},
    {firstname:'Ashraf',lastName:"Kamal",age: 31}
  ]

  const output = users.reduce((acc, curr)=>{
    if( curr.age >= 31){
      acc.push(curr.firstname)
    }
    return acc
  },[])

  console.log("output:",output)