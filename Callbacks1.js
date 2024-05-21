

// function hello(a,b,c,d,e, f){
//     console.log(a,b,c,d,e,f)
// }

// hello(10, 10.6, true, "hello", [10,20,30], {name: "Neha", age: 30, city: "Delhi"})

function hello(n, fun1){
    // n = 1000
    // fun1  = ()=>{console.log("Thappad")}
    console.log("Number is here", n)
    console.log("Function is here", fun1)
    fun1()
}

let x = 1000 
// function slap(){
//     console.log("Slap")
// }
const slap = ()=>{
    console.log("Thappad")
}


// hello(x, slap())
hello(x, slap) //  call back function