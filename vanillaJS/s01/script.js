console.log("connected");




// two types of comments:

/*multiline

this is javascript comment*/


// Naming Variables
const pi = 3.1416; // constant variables cannot be re-assigned
// pi = 2.000;
console.log(pi);

let name1 = "Mickey"; // let can be re-assigned
name1 = "Mouse";
console.log(name1);

// let name1 = "Tom"; // let cannot be re-declared
// console.log(name1);

//var food = "pizza"; // ES6 slowly unused var as declaring variables
//console.log(food);

//Primitive Data Types
let name = "LaMelo"; //String data type
name = "Melo";
name = "Lonzo";
console.log(name);

let age = 15; //Number or integer
console.log(age);
console.log(typeof age); // it displays the data type that was assigned in the variable

let grade = 90.5;
console.log(grade);

let myCopy; //this is an example of declaring a variable ina camel case notation
console.log(myCopy); // it will be tag as undefined in the reason nothing declaring in the variable

let option1 = null;
console.log(option1);

let $year = 2023; // 
console.log($year);

let $_year = 2023;
console.log($_year);



//NOTE:
//Question 2, 3 Note: Certain special characteers are accepted when naming variable and when combining special characters.

// OBJECTS


let person = {
    //property: value

    name: "Jose Rizal", // String
    age: 30,            // number
    address: "Calamba, Laguna", // String
    isDoctor: true, // boolean
    spouse: null, // undefined
    siblings: [    // array
        "Paciano",
        "Pablo",
        "Pilar",
        "Pepito",
    ]
}

console.log(person); // it displays the object content
console.log(person.name);
console.log(person.address);
console.log(person.siblings); // it displays an array of siblings

//NOTE: We will use dot (.) notation to call the properties in the specific object.

// Array - is the collection of related data. storage of data types

let fruits = ["Apple", "Pear", "Guava", "Aratilis", "Grapes"]

console.log(fruits);
console.log(fruits.length); //  this method displays the 
console.log(fruits[2]);
console.log(fruits[4]);

//function
//function declaration
//function keyword
//function name and parenthesis (which holds the parameters)
//curly braces - determines the block of codes/statements that are written inside the the code block.

function greeting(firstName, lastName) {
    //parameters a.k.a "arguments" and "properties" "attributes"

    console.log('My name is ${firstName}, ${lastName}. It was nice to meet you');

}


greeting("Gerard", "Way"); // invoke function calls

function product(a, b) {
    console.log("Product: ");
    return (a * b);
}

console.log(product(2, 4));


































