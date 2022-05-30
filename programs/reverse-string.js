
//Reverse String
const stringValue = "abcdefg"

let reverseString=[]
for(let i = stringValue.length; i >= 0; i--){
    reverseString.push(stringValue[i])
}

console.log('Original String:',stringValue)

console.log('Reverse String:',reverseString.join(''))

console.log("In-build function: ",stringValue.split('').reverse().join())

//Output
// Original String: abcdefg
// Reverse String: gfedcba
// In-build function:  g,f,e,d,c,b,a