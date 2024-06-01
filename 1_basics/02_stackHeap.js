// data types are 2 types 
// ->premetive (string,number, bollean , null ,undefined , symbol , BigInt )
// ->Non-premetive (array , object , function)


// stack(premetive) , Heap (Non-premetive)

let youtubeChannelName = "RakeshBhuyan"
let newYoutubeChannelName = youtubeChannelName
console.log(newYoutubeChannelName);
youtubeChannelName = "ChaiAurCode"
console.log(youtubeChannelName);



let userOne = {
    email : "rakeshbhuuan0202@gmail.com",
    upiId : "rakesh@ybl"
}
let userTwo = userOne;
userTwo.email = "Rakesh@google.com"
console.log(userOne);
console.log(userTwo);