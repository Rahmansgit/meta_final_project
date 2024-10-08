// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;


function getPrices(taxBoolean) {
    for (const menu of dishData) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = (menu.price * tax).toFixed(2);
        }
        else if (taxBoolean === false) {
            finalPrice = menu.price.toFixed(2);
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!");
            return; // Exit the function
        }
        console.log(`Dish: ${menu.name} Price: $${finalPrice}`);
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === "number" && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5; 
        } else {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
        console.log('The second argument must be a number between 0 and 30');
    }
    
}

// Call getDiscount()
getDiscount(true, 2)
getDiscount(false, 10)