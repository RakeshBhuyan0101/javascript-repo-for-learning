// fetch("https://google.com").then().catch().finally()

const promise1 = new Promise(function (resolve , reject) {
    // Do a async task
    // DB calls , cryptography , network
    setTimeout(function() {
        console.log("Async task is completed");
        resolve()
    },1000)
})

promise1.then(function () {
    console.log("Promise consumed");
})

new Promise (function (resolve , reject) {
    setTimeout(function() {
        console.log("Async task 2 ");
        resolve()
    }, 1000)
}).then (function () {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise (function(resolve , reject) {
    setTimeout(function() {
        resolve({username : "rakesh" , email : "rakesh@gmail.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username : "rakesh" , password : "Rakesh@965"})
        }
        else {
            reject(" ERROR : something went wrong")
        }
    }, 1000);
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username
}).then ( function (username) {
    console.log(username);
}).catch (function(error) {
    console.log(error);
}).finally (function () {
    console.log("The promises is either resolved or rejected");
})
