const stringValue = "abcdasdfgsdfeadfrtw";
const arrayString = stringValue.split('')

const dupString = arrayString.filter((ele,index)=>{
    return arrayString.indexOf(ele) !== index
})

const uniqueString = arrayString.filter((ele,index)=>{
    return arrayString.indexOf(ele) === index
})

console.log("Original String",arrayString.join())
console.log("Duplicate String:",dupString.join())
console.log("unique String:",uniqueString.join())

//Output :
// Original String a,b,c,d,a,s,d,f,g,s,d,f,e,a,d,f,r,t,w
// Duplicate String: a,d,s,d,f,a,d,f
// unique String: a,b,c,d,s,f,g,e,r,t,w