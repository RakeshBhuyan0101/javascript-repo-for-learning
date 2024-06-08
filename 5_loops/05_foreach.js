// for each loop
const coading = ["cpp" , " java" , "java" , "javascript" , "python"]
coading.forEach( function (item) {
    console.log(item)
} )

coading.forEach( function (item ,index , arr) {
    console.log(item ,  index , arr)
} )

// coading.forEach( (item) => {
//     console.log(item)
// })

// function printMe (item) {
//     console.log(item);
// }

// coading.forEach(printMe)

const myCoading = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },

]

myCoading.forEach( (item) => {
    console.log(item.languageFileName);
})