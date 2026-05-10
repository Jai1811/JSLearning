person = {
    "name": "Vijay",
    "age": 25,
    "city": "Bangalore"
}
const printName = person => `My name is ${person.name}, i am ${person.age} years old and I live in ${person.city}`;
console.log(printName(person));

const person1 = (name="Vijay",age=25,city="Bangalore") => `My name is ${name}, i am ${age} years old and I live in ${city}`;
console.log(person1());

const person2 = person1("das",25);
console.log(person2);//usse the default value for city will be bangalore


//rest parameters varargs
const sum = (...numbers) => numbers.reduce((acc,curr)=> acc+curr,0);
console.log(sum(1,2,3,4,5));

let browser = (browser='chrome',...urls) => urls.map(url => `${browser} opened ${url}`);
console.log(browser('firefox','https://google.com','https://github.com'));

