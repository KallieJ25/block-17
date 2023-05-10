// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

//Items with Price under $5

const underFive = (item) => {
    return item.price <= 5;
}
const itemsUnderFive = coffeeMenu.filter(underFive);
console.log("All menu items below $5:")
console.log(itemsUnderFive);

// Items with prices that have an even number

 const even = (item) => {
     return item.price % 2 ===0;
}
const evenPrice = coffeeMenu.filter(even);
console.log("All the menu prices that are even numbers:")
console.log(evenPrice);

// Total cost of all the items off menu
 
const sum  = coffeeMenu.reduce((accumulator, object) => {
return accumulator + object.price;
}, 0);
console.log("The total cost of all the menu items is:")
console.log(sum);

// All the items that are seasonal

const seasonalDrinks = coffeeMenu.filter(item => item.seasonal);


// Print all the seasonal drinks with the words "with imported beans" after the name

seasonalDrinks.forEach(drink => {
    console.log(drink.name + " with imported beans");
});

module.exports = coffeeMenu