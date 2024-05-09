let books = [
     {
        title: 'Atomic Habits',
        pages: 320,
        author: "James Clear",
        genre: ["Self Help", "Personal Development"]
    },
    {
        title: "Pride and Prejudice",
        pages: 400,
        author: "Jane Austen",
        genre: ['Non-Fiction', 'Romance', 'Drama', 'Classic Literature'],
        price: 9.99,
    },
    {
        title: "The Power of Now",
        pages : 236,
        author:"Eckhart Tolle ",
        genre: ['Productivity','Self Help', 'Fiction','NonFiction']
    }
];

console.log("Atomic Habits: " + books[0].author);
console.log("Pride and Prejudice: " + books[1].genre[1]);

//Temperal literal string `
console.log(`Genre of the first book: ${books[0].title} is ${books[0].genre[1]}`);

console.log(`"${books[1].title}" is a ${books[1].genre[1]} novel and costs $${books[1].price}`);