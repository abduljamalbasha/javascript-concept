
// Get 2nd largest number from array

// Exmaple : 1
 
var arr = ['20','120','111','215','54','78'];
function getNlargestNumber (array , position){
  const sortedArray = array.sort(function(a,b){
        return b-a;
    });
    console.log("Original Sorted Array:",sortedArray)
    return sortedArray[position - 1]
}

console.log('getNlargestNumber:',getNlargestNumber(arr,2))

// console.log("Example 1:", arr[1]);



// // Example 2
// var secondMax = function (){ 
//     var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
//     var max = Math.max.apply(null, arr); // get the max of the array
//     console.log('max:',max)
//      arr.splice(arr.indexOf(max), 1); // remove max from the array
//     return Math.max.apply(null, arr); // get the 2nd max
// };
// console.log(secondMax())
