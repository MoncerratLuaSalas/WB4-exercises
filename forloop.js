// let age = 15;
// while (age  < 18) { // 
//   console.log(`You are ${age} years old. That is not old enough`);
//   age++; // increment +1 every loop 
 
//   console.log(`Happy birthday, You are ${age} years old`);
//   if(age == 17) {
//     console.log(`Just one more year to go before you are 18`);
//   }
// }

// Array of movie objects
const movies = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 }
  ];
  
  // Set up an index for while loop
  let index = 0;
  
  // Use a while loop to process the array

let amountOfMovies = movies.length;
console.log(`Movies: ${amountOfMovies}`);
  while (index < amountOfMovies) {
    const movie = movies[index];
    if (movie.year < 2000) { // Check if the movie was released before the year 2000
      console.log(`${movie.title} was released in ${movie.year}.`);
    }
    index++; // Increment index to move to the next movie
  }

//   const book = [
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "Animal Farm", author: "George Orwell", year: 1949 },
//     { title: "The Road", author: "Cormac McCarthy", year: 2006 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     { title: "The Girl with the Dragon Tattoo", author: "Stieg Larson", year: 2005 }
//   ];

//   let i = 0

//   let amountOfBooks = book.length;
//   console.log(`Amnount of Books on List ${amountOfBooks}`);
//   while (i > amountOfBooks) {
//     const book = book[index];
//     if (book.year < 2000) {
//         console.log(`${book.title} written by ${book.author}, was published in ${book. year}. The 1900's`)
//     }
//     else if (book.year > 2000) {
//         console.log(`${book.title} written by ${book.author}, was published in ${book. year}. 20th Century`)
//     }
    
    
//     i++;
//   }



//REVISED VERSION OF CODE
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Animal Farm", author: "George Orwell", year: 1949 },
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", year: 2005 }
];

let amountOfBooks = books.length;
console.log(`Amount of Books on List: ${amountOfBooks}`);

let i = 0;

while (i < amountOfBooks) {
    const book = books[i]; // Retrieve the current book object at index i

    if (book.year < 2000) {
        console.log(`${book.title} written by ${book.author}, was published in ${book.year}. The 1900's`);
    } else {
        console.log(`${book.title} written by ${book.author}, was published in ${book.year}. 20th Century`);
    }
    
    i++;
}
