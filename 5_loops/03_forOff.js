// for off loops. ans maps
// for off loop is not work with objects


const arr = [1,2,3,4,5,6,7,8]

for (const num of arr) {
    // console.log(num)
}

const greetings = "Hellow world"
for (const greet of greetings ) {
    // console.log(greet);
}

const map = new Map()
map.set("IN" , "India")
map.set ("USA" , "United State of America")
map.set("FR" , "France")
map.set("IN" , "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key , val] of map) {
    console.log(key , ":-" , val);
}