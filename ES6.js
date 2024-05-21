// destrucuring 

// shorthand 

// spread 

// rest 

// default parameters



function profile({name, age, city}){ // {name: "Neha", age: 30, city: "Delhi"}
    // let obj = {name: "Neha", age: 30, city: "Delhi"}
    // let {name, age, city} = obj  // destructuring
    console.log("Name is", name)
    console.log("Age is", age)
    console.log("City is", city)
}

profile({name: "Neha", age: 30, city: "Delhi"})

profile({name: "Mina", age: 20, city: "Chennai"})
