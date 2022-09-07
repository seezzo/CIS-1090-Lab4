//STEP 0    Fork and download this lab

//STEP 1    Read the entire program

//Define a function named "max" that takes two parameters
//and returns the larger of the two.
function max(a, b){
    if ( a > b ){
        return a;
    } else {
        return b;
    }
}

//STEP 2    Define a second function named min that returns
//          The smaller of the two parameters

//(YOUR WORK HERE)

//STEP 3    Commit this code to your GitHub!

//Run some tests on the max function
console.log("Testing the max() function...");

//Look at this!!
            // ↓String Literal Expressions      // ↓ Boolean Expressions!
console.log("max(0,0) == 0? ",                  max(0,0) == 0);
console.log("max(7,4) == 7? ",                  max(7,4) == 7);
console.log("max(-10,3) == 3? ",                max(-10,3) == 3);

//Wow! An IF Statement! The expression below might not make much sense
//(but try reading it out loud, "If the type of min equals a function..")
//we can guess it evaluates to TRUE once you wrote that MIN function

            // ↓ a boolean expression
if ( typeof min == 'function' ){
    //Run some tests on the min function
    console.log("");
    console.log("Testing the min() function...");
    console.log("min(0,0) == 0? ",      min(0,0) == 0);
    console.log("min(7,4) == 4? ",      min(7,4) == 4);
    console.log("min(-10,3) == -10? ",  min(-10,3) == -10);
} else {
    console.log("The min function does not exist yet");
}