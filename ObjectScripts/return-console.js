"use strict"

//Uses function inside of object
let book1 = {
    title: "Eat that Frog",
    price: 19.95,
    displayInformation: function() {
        return `Title: ${this.title} and price ${this.price}`
    }
}

console.log(book1.displayInformation()); //---> () <--- calls function.

// Need so specify ---> this. <--- in function inside of object or else when called, will call values outside of object.
// console.log just output and cannot be used twice versus return which is outside of the variable and can be used multiple times. 
//Stores information in different varbiable and can be called multiple times.

let book = {
    title:'My book',
    price: 10.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log(combinedvalue);
    }
}

let book2 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log("The output is " + combinedvalue);
    }
}

let book3 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}

let book4 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}
book2.totalValue();
book.totalValue();

let book1total = book3.totalValue();
let book1tota2 = book4.totalValue();
console.log(book1total+ book1tota2);