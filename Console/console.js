console.error("This is an error message.");
console.warn("This is a warning message.");

console.log("This is a log message.");
console.info("This is an info message.");

console.debug("This is a debug message.");

console.assert(1 === 2, "This assertion failed because 1 is not equal to 2.");

console.table([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }]);

console.group("MyGroup");
console.log("This is inside the group.");
console.groupEnd();     

console.time("MyTimer");
setTimeout(() => {
    console.timeEnd("MyTimer");
}, 1000);

console.count("MyCounter");
console.count("MyCounter");

console.count("MyCounter"); 

console.countReset("MyCounter");
console.count("MyCounter"); 


console.log("%cThis is a styled log message.", "color: blue; font-size: 16px;");