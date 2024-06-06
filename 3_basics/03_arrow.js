const user = {
    username : "Rakesh",
    price : 999,
    welcomeMessage : function () {
        console.log(`${this.username} , welcome to website `)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this)

// function chai ( ) {                  this keyword is not work with fun.
//     const username = "rakesh"
//     console.log(this.username)
// }  
// chai()  

//                  ARROW function

// const addTWo1 = (num1 , num2) => {
//     return num1+num2
// }

const addTWo1 = (num1 , num2) => (num1+num2) // no need to write return keyward
const addTWo2 = (num1 , num2) => ({username : "rakesh"}) // no need to write return keyward

console.log(addTWo2(3,4))