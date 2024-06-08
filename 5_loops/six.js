//                          FILTER METHOD

// const coading = ["cpp" , " java" , "java" , "javascript" , "python"]

// const val = coading.forEach( (items) => {
//     // console.log(items);
//     return items
// })

// console.log(val);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num) => num > 4 )
const newNums = myNums.filter((num) => { // if curly brack bound to write return keyword
    return num > 4
} )
console.log(newNums);

// same using foreach loop

const newnums = []
const val = myNums.forEach( (index) => {
    if (index > 4) {
        newnums.push(index)
    }
} )

console.log(val);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter( (bk) => bk.genre === "History")
    //  const userBooks = books.filter( (bk) => bk.publish > 2000)
     const userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History")
  console.log(userBooks);
