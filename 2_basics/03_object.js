
// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Rakesh",
    "full name" : "Rakesh Bhuyan",
    [mySym] : "myKey1",  // use symbol data type
    age : 18,
    location : "Nayagarh",
    email : "rakesh@google.com",
    isLoggedin : false
}

// Access object values
console.log(jsUser.age)
console.log(jsUser["age"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

// Object.freeze(jsUser)


jsUser.greeting = function () {
    console.log("hellow js user ")
}

jsUser.greeting2 = function() {
    console.log(`Hellow js user ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())