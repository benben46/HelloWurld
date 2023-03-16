console.log("Hello World");
//In the old days, the 'var' keyboard is used to declare variable but there are issues with using it so we use...
let name1;
//By default, variables in js are declared as undefined.
console.log(name1); 

//It is showing that it is deprecated because it is a global variable. If I were to put it inside a function then it should be fine.
let name = "Mosh";
console.log(name);

let firstName = "Ben";


//***constants***
const interestRate = 0.3;


/* Types of variables: [Primitives/Value Types] AND [Reference Types]
Primitives: String, Number, Boolean, undefined, null
Reference: Object, Array, Function
*/
let lastName = "Johnsun";
let age = 30;   //In JS, all numbers are just type number(rather than floating, double, int, etc...)
let isApproved = false;
let middleName = undefined; //The value 'undefined' is also a type
let selectedColor = null;   //The type is Object
//JS is a dynamic language meaning that the type of a variale can change. We can use 'typeof' to check what type it is. 
//The type of a variable is determined at runtime based on the assigned values


//***Objects***
let name2 = 'Dankan';
let age2 = 30;
//Object declaration
let person = {
    name: 'Mosh',
    age: 3
};
//Dot Notation
person.age = 31;
//Bracket Notation
person['name'] = 'Mary';

//Sometimes the name of a person won't be known until runtime(such as when we expect the user to fill out the detail)
let selection = 'name';
person[selection] = 'Mary';


//***Arrays***
//Arrays are objects
//The length of the array and its contents can change. 
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green'; //we added another color
selectedColors[3] = 2;  //we can also use another type
cosole.log(selectedColors[0]);


//***Functions***
function greet(name/*parameter*/) {
    console.log('Hello ' + name);
}
//know different between parameters and arguments
greet('John'/*argument*/);
//because we didn't declare a type for the parameter of the function, it should be undefined by default.

function square(num) {
    return square * square;
}
//two function calls here... console.log and square()
console.log(square(2));



                                        