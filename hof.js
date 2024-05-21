// hof => higher order function



// function that accepts a function or returns a function or both


// function hof1(fun1){
//     console.log("Function is here", fun1)
//     fun1()
// }

// hof1 is a higher order function beause it accepts a function as an argument


// const sum = ()=>{
//     console.log("sum")
// }

// hof1(sum)



// function test(){
//     console.log("Testing....")
//     return ()=>{console.log("Hello")}
// }

// let x = test() // x = ()=>{console.log("Hello")}
// x()


// function hof2(){
//     console.log("Hello1")
//     return ()=>{
//         console.log("Hello2")
//         return ()=>{
//             console.log("Hello3")
//         }
//     }
// }

// let x = hof2()
// let y = x()
// y()


// map 
// filter 
// reduce
// forEach
// find
// sort