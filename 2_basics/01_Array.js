const myArr = [ 34,2,4,12,4 , "rakesh"]
const arr = new Array(3,5,7,87,)
console.log(myArr);
console.log(myArr[5]);
console.log(typeof(arr));
console.log(typeof(myArr));

// Array Methods

// arr.push(45)
// arr.push(4533)
// arr.pop()
// console.log(arr);
// arr.unshift(0) // push the element at first and shift the element to right
// console.log(arr)

// console.log(arr.includes(21))
// console.log(arr.indexOf(87))
// console.log(arr);

// const newArray = arr.join() // convert the array to string

// console.log(arr)
// console.log(newArray);

 // slice vs splice in splice it will manipulate the orignall array and also include the range

 console.log("A",myArr)
 let arr1 = myArr.slice(1,3);
 
 console.log(arr1)
 console.log("B",myArr)

 let arr2 = myArr.splice(1,3);
 console.log("c" ,myArr)
console.log(arr2)




