// // Initialize variables WHILE LOOP
// let num = 1;  // Initialize num with the value 1
// let i = 1;    // Initialize i with the value 1

// // Execute the loop while i is less than 5
// while (i < 5) {
//   // Multiply the current value of num by 2 and update num with the result
//   num = num * 2;
  
//   // Output the current value of num to the console
//   console.log(num);
  
//   // Increment the value of i by 1 for the next iteration
//   i++;
// }
// WHILE LOOP KEEPS GOING AS LONG AS CONDITION IS TRUE IN THIS CASE, IS TRUE UP UNTIL 4



//DO/WHILE LOOP TRIES CONDITION ONCE AND KEEPS GOING IF CONDITION IS TRUE, IF NOT ---> OUTPUT OUTSIDE LOOP
// let num = 1;
// let i = 1;
// do {
//  num = num * 2;
//  console.log(num);
//  i++;
// } while (i < 5)


//DO\WHILE LOOP
    // let i = 10;

    // do {
    //   console.log("Inside loop: i =", i);
    //   i++;  // Increment i
    // } while (i < 5);
    
    // console.log("Outside loop");
    

//FOR LOOP
let num = 1;

// Syntax of a for loop:
// for (initialization; condition; iteration) { loop body }

// Initialization: Initialize a loop control variable (i = 0)
// Condition: Check if the loop should continue (i < 5)
// Iteration: Update the loop control variable after each iteration (i++)

for (let i = 0; i < 5; i++) {
  // Loop body: Code inside the loop that executes repeatedly
  num = num * 2;        // Multiply current num by 2 and update num
  console.log(num);     // Output the current value of num
}
