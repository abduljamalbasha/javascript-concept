{
    //Let and Const are blocked scope you can access with the block scope
    var a =10
    let b=20
    const c=30
    console.log(a)
    console.log(b)
    console.log(c)
}
// console.log(a)
// console.log(b)
// console.log(c)


//Shadowing
console.log('-------Shadowing------')
var a = 100
{
    var a =10
    let b=20
    const c=30

    console.log(a)
    console.log(b)
    console.log(c)
}
console.log("replaced in the global scope:",a)


//okay
const j =10
{
    const j =100
}

//Okay because shadowing with in the block
//Error k areldy declare
// let k = 10
// {
//     let k =20
// }


//Error l already declare
// let l = 10
// {
//     var l =20
// }



//Error l already declare
var m = 10
{
    let m =20
}




