
let arr = [10,20,30,40,50]


// let sum = 0
// arr.forEach((value,index)=>{ sum = sum + value})
// console.log(sum) // 150


// reduce will return a single value


// let x = arr.reduce((sum,value, index)=> sum+value,0)
let x = arr.reduce((sum,value, index)=> sum+value)

// sum = // sum+value => 0+10 => 10

console.log(x) // 150


