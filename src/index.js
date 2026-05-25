/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where Technigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/
const cafeName = "Technigo Cafe";
console.log(`Welcome to ${cafeName}! What would you like to order today?`);

/*
2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/

const coffeePrice = 2.5;
const totalCoffees = 3;
console.log(`There you go, that'll be ${coffeePrice*totalCoffees} euros`);

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/

const bestCoffee = false;
console.log(`You said this coffee is the best, that was actually ${bestCoffee}`);

/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
Assign it a new value.
Print it out. => This should give you the new value.
*/

let cafeGuests = 5;
console.log(`We have ${cafeGuests} guests in the cafe.`);
cafeGuests = 10;
console.log(`We have ${cafeGuests} guests in the cafe.`);

/*
5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/

const maxGuests = 20;
console.log(`The maximum number of guests allowed in the cafe is ${maxGuests}.`);
// maxGuests = 30;

/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/

const cafeSpecial = "Today's special is a caramel latte.";
console.log(cafeSpecial.toUpperCase());

/*
7)
Print out the same string in only lowercase letters.
*/

console.log(cafeSpecial.toLowerCase());


/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/

const specialDeal = "Today we have a special summer deal!";
console.log(specialDeal);
console.log(specialDeal.replace("summer", "winter"));
console.log(specialDeal);
