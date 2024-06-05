const tinderUser = {}

tinderUser.name = "Rakesh"
tinderUser.age = 25
tinderUser.email = "some@gmail.com"

// console.log(tinderUser)

const regularUser = {
    name : "Rakesh",
    fullName :{
        userName :{
            firstName : "Rakesh",
            lastName : "Bhyan"
        }
    }
}

// console.log(regularUser.fullName.userName)


const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2)
const obj3 = {...obj1 , ... obj2} // spread operator
// console.log(obj3)

const user = [
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 1,
        email : "r@gmail.com"
    },
    {
        id : 1,
        email : "r@gmail.com"
    }
]

// console.log(user[1].email)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty("emaill")) //to cheack if key is present or not 



// de-structure
const course = {
    courseName : "java script",
    price : "999",
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor)
const {courseInstructor : instructor} = course // destructor

console.log(instructor)