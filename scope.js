function a(){
    // var b =20
    // console.log(b)
    function c(){
        // console.log(b)
        function d(){
            console.log(b)
        }
        d()
    }
    c()
}
var b = 10
a()
// console.log(b)