//javascript considers the last defined function as the valid one, so we can overload a function by defining it multiple times with different parameters.

function add(a, b) {
    return a + b;
}

function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2)); // This will call the second function and return 6
console.log(add(1, 2, 3)); // This will also call the second function and return 6

// To achieve function overloading in JavaScript, we can use the arguments object to check the number of parameters passed to the function and perform different operations accordingly.
//or maybe use type checking to determine the behavior of the function based on the types of the arguments passed.
function add() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    } else {
        return "Invalid number of arguments";
    }
}

console.log(add(1, 2)); // This will return 3
console.log(add(1, 2, 3)); // This will return 6
console.log(add(1)); // This will return "Invalid number of arguments"      
