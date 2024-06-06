// var is used as global variable
var c = 400
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30 
}

// console.log(a)
// console.log(b)
// console.log(c)

function one () {
    const username = "Rakesh"
    function two () {
        const website = "Youtube"
        console.log(username)
    }
    // console.log(website) // give error dut ot of scope 
    two()
}
one()
// ************************* INTERESTING ****************************
    function addOne (num) {
        return num+1
    }

    addOne(5)

    const addTwo = function (num) {
        return num+2
    }
    