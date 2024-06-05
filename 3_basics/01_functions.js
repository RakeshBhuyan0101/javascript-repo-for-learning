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
