// Define a function named parsePartCode which takes a partCode string as input
function parsePartCode(partCode) {
    // Split the partCode string into two parts using '-' as the delimiter
    // The first part will contain 'supplierCode:productNumber' and the second part will be 'size'
    let [supplierCodeProduct, size] = partCode.split('-');

    // Further split the 'supplierCode:productNumber' part using ':' as the delimiter
    // The first part will be 'supplierCode' and the second part will be 'productNumber'
    let [supplierCode, productNumber] = supplierCodeProduct.split(':');

    // Create an object to store the parsed values
    let parsedPart = {
        supplierCode: supplierCode, // Assign the extracted supplierCode to the 'supplierCode' property of the object
        productNumber: productNumber, // Assign the extracted productNumber to the 'productNumber' property of the object
        size: size // Assign the extracted size to the 'size' property of the object
    };

    // Return the object containing the parsed values
    return parsedPart;
}

// Example part code string
let partCodeString = "ABC:12345-10";

// Call the parsePartCode function with the example part code string and store the returned object in a variable named parsedPart
let parsedPart = parsePartCode(partCodeString);

// Log the parsedPart object to the console to display the parsed values
console.log(parsedPart);
// Output: { supplierCode: "ABC", productNumber: "12345", size: "10" }

// You can now access individual properties of parsedPart
console.log(parsedPart.supplierCode); // Output: "ABC"
console.log(parsedPart.productNumber); // Output: "12345"
console.log(parsedPart.size); // Output: "10"
