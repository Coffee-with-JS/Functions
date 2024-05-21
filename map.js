
// map, forEach, filter, reduce => all are higher order functions
// they work on arrays


let arr = [10,20,30,40,50]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]*arr[i])
// }

// arr.map(fun1)


// function fun1(value, index){
//     console.log(value*value)
// }

// let x = arr.map((value,index)=>{ return value*value})

// let y = arr.map((value,index)=>value*value)

// // [100,400,900,1600,2500]

// console.log(x)


// let arr1 = [10,20,30,40,50]

// let z = arr.map((value,index)=> value>0)

// console.log(z) // [true,true,true,true,true]


// let arr1 = [10,21,30,43,50]

// let z = arr1.map((value,index)=> {
//     if(value%2==0){
//         return "even"
//     }
// })
// // ["even", undefined, "even", undefined, "even"]
// console.log(z) 


let arr1 = [10,21,30,43,50]

arr1.forEach((value,index)=> {
    if(value%2==0){
        console.log("even")
    }
    
})
