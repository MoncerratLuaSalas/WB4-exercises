// function createPayStub(id, name, payRate, hoursWorked) {
//     let grossPay = 0;
//     if (hoursWorked <= 40) {
//     grossPay = payRate * hoursWorked;
//     }
//     else {
//     grossPay = (40 * payRate) +
//     ((hoursWorked - 40) * 1.5 * payRate);
//     }
//     let payStub = {
//     employeeId: id, 
//     name: name, 
//     grossPay: grossPay
//     };
//     return payStub;
//    }
//    let emp1PayStub = 
//     createPayStub("1", "Ezra", 38.46, 49);
//    console.log(emp1PayStub.name + " earned $" + 
//     emp1PayStub.grossPay.toFixed(2));
//    let emp2PayStub = 
//     createPayStub("2", "Elisha", 43.27, 42);
//    console.log(emp2PayStub.name + " earned $" + 
//     emp2PayStub.grossPay.toFixed(2));

let myInfo = {
    firstname: "Moncerrat",
    address: "22258 W Beautiful Ln",
    city: "Buckeye",
    state: "Arizona",
    zip: 85326
};

function printContact (myInfo) {
    console.log(`Name: ${myInfo.firstname}, Address: ${myInfo.address}, City: ${myInfo.city}, State: ${myInfo.state}, Zip Code: ${myInfo.zip}`)    
};

printContact(myInfo)
