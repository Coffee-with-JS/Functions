// function hello(a,b,c){
//    console.log(a,b,c)
// }

// hello(10,20,30)
// hello(10,40,50)


// function hello(a, b){ // a = 10, b = 20
//     console.log("Hello")
//     return a+b
//     console.log("World")
// }

// let x = hello(10,20)
// console.log(x)


// function sum( ...a){ // rest
//     for(let t of a){
//         console.log(t)
    
//     }
// }

// sum(10,20)
// sum(10,20,30)
// sum(10)
// sum(10,20,30,40,50,60,70,80,90,100)


// let arr = [10,20,30,40,50]

// let arr1 = [...arr]


// default paramaters: 


function signup(name="anonymous", age, city="Delhi"){
    console.log(name, age, city)
}

signup()