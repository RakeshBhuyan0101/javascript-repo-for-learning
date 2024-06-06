// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai () {
    // named iife
    console.log("DB CONNECTED ");
}) ();  // attention to semi colon

// (defination) (execution)

((name) => { // unnamed iife
    console.log(`DB CONNECTED TWO ${name}`)
}) ("rakesh")