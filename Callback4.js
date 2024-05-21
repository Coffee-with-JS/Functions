
function greetings(def){
    // def=  function() {sum(10,20)}
    // def =  ()=>{sum(10,20)}
    // def  = function(){sum(10,20)}
     def()
}

// function def(){
//    sum(10,20)
// }



// function sum(a,b){
//     console.log(a+b)
// }

const sum = (a,b)=>{
    console.log(a+b)
}


// greetings(
//    function (){
//     sum(10,20)
//    }

// )


greetings(()=>{sum(10,20)}) // arguments

