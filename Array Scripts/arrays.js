
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
  




// Define a function named getMealCost that calculates the total cost of orders
function getMealCost(orders) {
  let sum = 0; // Initialize a variable to keep track of the total cost
  let numOrders = orders.length; // Get the number of orders in the provided array

  // Loop through each order in the array
  for (let i = 0; i < numOrders; i++) {
      // Add the price of the current order to the sum
      sum += orders[i].price;
  }

  return sum; // Return the total cost of all orders
}

// Define an array myOrder containing objects representing food items and prices
let myOrder = [ 
  { item: "Chicken Tacos", price: 8.95 },
  { item: "Guacamole", price: 2.85 },
  { item: "Sweet Tea", price: 2.75 }
];

// Define an array yourOrder containing objects representing food items and prices
let yourOrder = [ 
  { item: "Hamburger", price: 6.95 },
  { item: "Fries", price: 2.25 },
  { item: "Sweet Tea", price: 2.75 },
  { item: "Fried Apple Pie", price: 4.95 }
];

// Calculate the total cost of myOrder using the getMealCost function
let mealCost = getMealCost(myOrder);
// Calculate the total cost including a 20% tip for myOrder
let totalWithTip = mealCost * 1.2;
// Display the formatted total cost with a tip for myOrder
console.log("My meal costs " + totalWithTip.toFixed(2)); 

// Calculate the total cost of yourOrder using the getMealCost function
mealCost = getMealCost(yourOrder);
// Calculate the total cost including a 20% tip for yourOrder
totalWithTip = mealCost * 1.2;
// Display the formatted total cost with a tip for yourOrder
console.log("Your meal costs " + totalWithTip.toFixed(2)); 




// Any values that are unassigned will hold undefined.
let kids = ["Natalie", "Brittany", "Zachary"];
kids[3] = "Brandon";
kids[5] = "Christina";
console.log(kids);



// indexOf() searches the array for an element and returns its position
// let teams = ["Red Sox", "Rangers", "Blue Jays",
//  "Astros", "White Sox", "Rangers"];
// let index = teams.indexOf("Rangers"); // returns 1
// if (index == -1)
//  console.log("Item not found");
// else
//  console.log("Item at position: " + index);

 //This code searches the list from the position 3

//  let teams = ["Red Sox", "Rangers", "Blue Jays",
//  "Astros", "White Sox", "Rangers"];
// let index = teams.indexOf("Rangers", 3);
// if (index == -1)
//  console.log("Item not found");
// else
//  console.log("Item at position: " + index);




 // lastIndexOf() it searches that array for an element startung at the and and
 // returns its position

 let teams = ["Red Sox", "Rangers", "Blue Jays",
 "Astros", "White Sox", "Rangers"];

let firstIndex = teams.indexOf("Rangers");
let lastIndex = teams.lastIndexOf("Rangers"); 


// Searching an arry to find a collection of elements that match a collection
// of elements that match a specific condition

let menu = [
  {id: 1, item: "Tacos", category: "Meal", price: 12.29},
  {id: 2, item: "Burger", category: "Meal", price: 7.29},
  {id: 3, item: "Salad", category: "Meal", price: 8.29},
  {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
  {id: 5, item: "Coke", category: "Drink", price: 2.29},
 ];

 function getMenuItemsInCategory(menu, category) {
  let matching = [];
  let numItems = menu.length;
  for(let i = 0; i < numItems; i++) {
  if (menu[i].category == category) {
  matching.push(menu[i]);
  }
  }
  return matching;
 }
 // show all the drinks
 let drinks = getMenuItemsInCategory(menu, "Drink");
 let numDrinks = drinks.length;
 for(let i = 0; i < numDrinks; i++) {
  console.log(drinks[i].item + 
  " $" + drinks[i].price.toFixed(2));
 }