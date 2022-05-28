const person = {
    firstname: "jamal",
    lastname:"basha",
    pirntFunc : function(){
        console.log(this.firstname,this.lastname)
    }
}

person.pirntFunc()
// output: jamal basha


//Call :  function borrow from another funtion
const person2 = {
    firstname:"abdul",
    lastname:"jamal"
}
person.pirntFunc.call(person2)
//output :  abdul jamal

//2nd Approach for call()
let pirntFunc = function(hometown,state){
    console.log(this.firstname,this.lastname, hometown,state)
}
pirntFunc.call(person)
pirntFunc.call(person2)

//2nd Approach for call() with parameter
pirntFunc.call(person,"chennai","TN")
pirntFunc.call(person2,"vaniyambadi","MU")

//apply() - only one change we have to pass list of array as second parameter

pirntFunc.apply(person2,[1,2])

//bind()-  same as call but it will bind into the reference of the object/function and it will keep the copy of the funtion and return it

const bindMethod = pirntFunc.bind(person,"hello","sameera")
console.log("bindMethod:",bindMethod)
bindMethod()