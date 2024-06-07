// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("Febuary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;

    default:
        console.log("defult case match")
        break;
}

// Nullish Coalescing operator (??) : null undefined

let val1;
// const val1 = 10 ?? 40 
val1 = null ?? 40 
val1 = undefined ?? 40 
console.log(val1)

// ternary operator. 
// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("over budget") : console.log("under budget")
