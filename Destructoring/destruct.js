const arr = [1, 2, 3, 4, 5];

// Destructuring assignment
const [first, second, ...rest] = arr;//using spread operator to get the rest of the elements in the array

console.log(first);

const obj = {
    name: 'John',
    age: 30,
};


// Destructuring assignment
const { name, age, city='Unknown'} = obj;//using spread operator to get the rest of the properties in the object

console.log(name);
console.log(age);
console.log(city);

// Destructuring in function parameters
const Person = {
    name: 'John',
    age: 30,
};

function printUser(Person){
console.log(`Name: ${Person.name}, Age: ${Person.age}`);
}

printUser(Person);

//with destructuring in function parameters
function printUser({name, age}){
    console.log(`Name: ${name}, Age: ${age}`);
}

printUser(Person);