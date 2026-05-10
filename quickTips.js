const arr = [1, 2, 3, 4, 5,2, 3, 4, 5, 6];

const uniqueArr = [...new Set(arr)]; // [1, 2, 3, 4, 5, 6]

//2. int to string
const num = 123;
const str = num.toString(); // "123"

//3. string to int
const strNum = "456";
const intNum = parseInt(strNum); // 456

//4. primitive value of a string
const str4 = 1;
const primitiveValue = str4.valueOf(); // 1

//4. array to string
const arr2 = ['Hello', 'World'];
const str2 = arr2.join(' '); // "Hello World"

//5. string to array
const str3 = "Hello,World,JavaScript";
const arr3 = str3.split(','); // ["Hello", "World", "JavaScript"]   

//6. float to int
const floatNum = 3.14;
const intNum2 = parseInt(floatNum); // 3

//7. int to float
const intNum3 = 5;
const floatNum2 = parseFloat(intNum3); // 5

//8. check if a variable is an array
const isArray = Array.isArray(arr); // true

//9. check if a variable is a number
const isNumber = typeof num === 'number'; // true

//10. check if a variable is a string
const isString = typeof str === 'string'; // true

//11. check if a variable is an object
const obj = { name: 'John', age: 30 };
const isObject = typeof obj === 'object'; // true

//12. check if a variable is a function
const func = function() { return 'Hello'; };
const isFunction = typeof func === 'function'; // true

//13. check if a variable is undefined
let undefinedVar;
const isUndefined = typeof undefinedVar === 'undefined'; // true

//14. check if a variable is null
const nullVar = null;
const isNull = nullVar === null; // true

//15. check if a variable is NaN
const nanVar = NaN;
const isNaN = Number.isNaN(nanVar); // true

//16. check if a variable is finite
const finiteVar = 123;
const isFinite = Number.isFinite(finiteVar); // true


//swap two variables
let a = 5;
let b = 10;
[a, b] = [b, a]; // a is now 10 and b is now 5

//check if object has a property
const person = { name: 'Alice', age: 25 };
const hasName = 'name' in person; // true
const hasAddress = 'address' in person; // false

//get the keys of an object
const keys = Object.keys(person); // ["name", "age"]

//get the values of an object
const values = Object.values(person); // ["Alice", 25]

//remove falsy values from an array
const arr4 = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
const filteredArr = arr4.filter(Boolean); // [1, 2, 3, 4, 5]

//check if an array contains a value
const containsValue = arr.includes(3); // true
const containsValue2 = arr.includes(10); // false

//get the current date and time
const now = new Date(); // current date and time

//format a date as a string
const formattedDate = now.toLocaleDateString(); // e.g., "6/30/2024"

//format a time as a string
const formattedTime = now.toLocaleTimeString(); // e.g., "10:30:00 AM"

//check if array is empty
const emptyArr = [];
const isEmpty = emptyArr.length === 0; // true

//truncate an array to a specific length
const arr5 = [1, 2, 3, 4, 5];
const truncatedArr = arr5.slice(0, 3); // [1, 2, 3]

//merge two arrays
const arr6 = [6, 7, 8];
const mergedArr = [...arr5, ...arr6]; // [1, 2, 3, 4, 5, 6, 7, 8]

//remove duplicates from an array
const arr7 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr2 = [...new Set(arr7)]; // [1, 2, 3, 4, 5]

//last item of an array
const lastItem = arr5[arr5.length - 1]; // 5

//slice an array
const slicedArr = arr5.slice(-1); // [3, 4, 5]