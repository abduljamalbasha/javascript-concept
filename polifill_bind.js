let name = {
    firstname :"jamal",
    lastname:"basha"
}

const printMyname = function(hometown, state,country){
    console.log(this.firstname,this.lastname,hometown,state, country)
}

const bindfunc =  printMyname.bind(name,"chennai")
bindfunc("TN","India")

//creat my custom bind funtion

Function.prototype.myCustomBind = function(...args){
    let obj = this
     params = args.slice(1)
    return function(...args2){
        obj.apply(args[0],[...params, ...args2])
    }
}
const custombindcall = printMyname.myCustomBind(name,"vaniyambadi")
custombindcall("MU","China")