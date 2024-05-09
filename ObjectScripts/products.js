"use strict"

let lookSteal = [
    {
        character: "Legolas",
        description: "bby elf king",
        price: 1000
    },
    {
        character: "Bilbo",
        description: "cutie patootie w/ big feet",
        price: "free.99"
    },
    {
        character: "Gandolf",
        description: "my lil' old wiz",
        price: 400

    },
    {
        character: "Bard",
        description: "dragon slayer",
        price: 2000000
    },
    {
        character: "Thorin",
        description: "sussy dwarf",
        price: 1
    },
    {
        character: "Thranduil",
        description: "Big boss elf king",
        price: 1000000000
    }
]

// console.log(`${lookSteal[2].character} is ${lookSteal[2].description} and costs $${lookSteal[2].price}...`)

// lookSteal is parameter
function DisplayProduct(lookSteal) {
    console.log(`${lookSteal.character} is a ${lookSteal.description} and costs $${lookSteal.price}.`)
};
// Calling argument changing the number in tne brackets will choose different character. Starts from 0.
DisplayProduct(lookSteal[1]);
