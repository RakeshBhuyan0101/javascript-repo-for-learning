// function sum (number1, number2) {
//     console.log(number1+number2)
// }
function sum (number1, number2) {
    return number1 + number2
}

const result = sum(34 ,32)
console.log(result)


function loginUserName (userName) {
    if (userName === undefined) {
        console.log("enter a valid userName")
        return
    }
    return `${userName} just loggedin`
}

function loginUserName1 (userName = "Sam") {
    if (userName === undefined) {
        console.log("enter a valid userName")
        return
    }
    return `${userName} just loggedin`
}

loginUserName()
 const user = loginUserName("Rakesh")
 console.log(user)

 function calulateCartPrice (val1 , val2 , ...num1 ) { // rest operator
    return num1
 }

//  console.log(calulateCartPrice(23 ,45,44,22,44)) // return an array

const users = {
    userName : "munna",
    price : 992
}
// pass object in function parameter
function handelObject (anyObject) {
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);
}

handelObject(users)
handelObject({
    userName : "sam",
    price : 2224
})


// pass arr in function paramenter
const newArray = [100, 200, 300, 400]

function returnSecondElement (arr){
    return newArray[1]
}

console.log(returnSecondElement(newArray))
