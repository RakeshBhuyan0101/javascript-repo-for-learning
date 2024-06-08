                    // REDUCE METHOD    

const myNums = [1,2,3]
//  const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} and current val : ${currval}`);
//     return acc+currval
//  },0)

 const myTotal = myNums.reduce ( (acc , curr) =>  (acc+curr) , 0 )
 console.log(myTotal);

 const shoppingCart = [
    {
        itemNmae : "js course",
        price : 2999
    },
    {
        itemNmae : "python course",
        price : 299
    },
    {
        itemNmae : "web dev course",
        price : 5999
    },
    {
        itemNmae : "android course",
        price : 9999
    },
    {
        itemNmae : " data science course",
        price : 16999
    },

 ]

 const grandTotal = shoppingCart.reduce ( (acc , curr_obj ) => (acc+curr_obj.price) , 0 ) 

 console.log(grandTotal);