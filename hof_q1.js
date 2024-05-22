let arr = [10,[20,30],40,50, [60,70,80],90] 
// let arr = [10,20,30,40,50,60,70,80,90]

// [10,20,30,40,50,60,70,80,90]

// flatteing the array


// console.log(arr.flat())



// let x = arr.reduce((flatArray, value,index)=>{
//    console.log(flatArray)
//     //  return flatArray.push(value)
//     // return [...flatArray, ...value]
//      if(typeof(value) == "object"){
//         return [...flatArray,...value]
//      }
//      else{
//         return [...flatArray,value]
//      }
// }, [])


// let x = arr.reduce((flatArray, value)=>{
//     console.log(flatArray)
//      //  return flatArray.push(value)
//      // return [...flatArray, ...value]
//       if(Array.isArray(value)){
//          return [...flatArray,...value]
//       }
//       else{
//          return [...flatArray,value]
//       }
//  }, [])

let x = arr.reduce((flatArray, value)=>{
     return flatArray.concat(value)
 }, [])

// console.log(x)

// i = 0 ,  []  , return => [10]  => [10]
// i = 1, [10] ,  return => [10,20]






let person = [
    {name: "Ramu", city: "Delhi"},
    {name: "Ramesh", city: "Chennai"},
    {name: "Rajesh", city: "Delhi"},
    {name: "Rakesh", city: "Chennai"},
    {name: "Raj", city: "Delhi"},
    {name: "Ravi", city: "Mumbai"},
]


let y = person.reduce((group, person)=>{

    if(group[person.city] == undefined){ 
        group[person.city] = []
    }
    group[person.city].push(person)
    console.log(group)
    return group

}, {})

console.log(y)


// group = {
//     "Delhi" : [{},{}]
    //    "Chennai": [{}]
// }



//let arr = [10,20,10,10,20,10,20,10,20,30,10,20] 
// count the number of times each element is repeated in the array using reduce 


// let arr = [10,20,10,10,20,10,20,10,20,30,10,20]
// find avg of the array using reduce












// {
//     "Delhi": [{name: "Ramu", city: "Delhi"}, {name: "Rajesh", city: "Delhi"}, {name: "Raj", city: "Delhi"}],
//     "Chennai": [{name: "Ramesh", city: "Chennai"}, {name: "Rakesh", city: "Chennai"}],
//     "Mumbai": [{name: "Ravi", city: "Mumbai"}]
// }




// iife (5)
// closures (30mins)
// find(5), sort(30 mins)

// 1 hour

