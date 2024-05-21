
function hello(n, fun1){
    // n = 1000
    // fun1  = ()=>{console.log("Thappad")}
    console.log("Number is here", n)
    console.log("Function is here", fun1)
    fun1()
}



// let x = 1000 
// const slap = ()=>{
//     console.log("Thappad")
// }

// hello(x, slap)

// hello(1000, ()=>{console.log("Thappad")})

hello(1000, function (){
    console.log("Thappad")
}
)