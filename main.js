// Create a class
class MyObject {
	constructor() {}
	talk() {
		console.log("Hello");
	}
}

// Create a Protitype (inherits the Prototype and __proto__, it means all methods)
const newObject = new MyObject();
console.log(newObject);
console.log(newObject.__proto__); // access the prototype
console.log(newObject.__proto__.__proto__); // access the prototype of the prototype

newObject.talk();

// Add a function to the prototype
newObject.talk = () => {
	console.log("Another method was added to the prototype.");
};

newObject.talk(); // Another method was added to the prototype (executes the function of the prototype)

newObject.__proto__.talk(); // Hello (executes the function of the prototype of the prototype)

// Modify the function of the original prototype
newObject.__proto__.talk = () => {
	console.log("Modified function of the prototype...");
};

console.log(newObject);

newObject.talk();

newObject.__proto__.talk();

// An array can inherit the prototype from the object
let myArray = [];
myArray.__proto__ = newObject;
console.log(myArray);

myArray.talk();
myArray.__proto__.__proto__.talk();
