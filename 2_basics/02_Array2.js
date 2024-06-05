// const marvel_heros = ["Thor" , "IronMan" , "spiderMan"]
// const dc_heros = ["superman" , "flash" , "batman"]

// // marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros) // merge two or or more array and return a new array
// console.log(allHeros)
// const all_new_heros =[...marvel_heros, ... dc_heros]
// console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6] , 7 , 8 ,[9 , [10,11,12,12]]]
const another_orignal_array = another_array.flat(Infinity)
console.log(another_orignal_array)

console.log(Array.isArray("Rakesh"))
console.log(Array.from("Rakesh"))
console.log(Array.from({name : "Rakesh"}))

const score1 = 123
const score2 = 445

const scoreArray = Array.of(score1,score2)
console.log(scoreArray)