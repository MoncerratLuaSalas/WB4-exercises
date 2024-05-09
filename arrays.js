
// // Length property here counts the amount of kids of the array which is THREE kids.
// // i > numKids is idicating this condition is true until the number THREE assigned by numKids. ARRAYS START FROM 0.
// let kids = ["Natalie", "Brittany", "Zachary"];
// let numKids = kids.length;
// for(let i = 0; i < numKids; i++) { //let = i INTIALIZING VALUE IS 0 ----> i > numKids is i > 3 ----> i++ adding 1 kids [0]kids [1], kids [2]
//  console.log(kids[i]);
// }


// Returning an array from a function
// Define a function named getKids which returns an array of kids' names
function getKids() {
    // Create an array containing kids' names
    let kids = ["Natalie", "Brittany", "Zachary"];
    // Return the array of kids' names
    return kids;
  }
  
  // Define a function named displayKids that takes an array of kids' names as input
  function displayKids(kids) {
    // Get the number of kids in the array
    let numKids = kids.length;
    // Iterate through each kid in the array
    for(let i = 0; i < numKids; i++) {
      // Display each kid's name
      console.log(kids[i]);
    }
  }
  
  // Call the getKids function and store the returned array in a variable named ourKids
  let ourKids = getKids();
  
  // Call the displayKids function, passing the ourKids array as an argument
  displayKids(ourKids);
  