const proxy1= {
    name:'jamal',
    count:true
}

const newproxy = new Proxy(proxy1,{
    get: (obj, property) => {
        // console.log("property:",property)
        return  obj[property]
    }

})

console.log(newproxy.name)
console.log(newproxy.count)