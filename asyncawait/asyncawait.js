//async/await used with promise 
//async is a keyword used to declare a function as asynchronous, which means that it can contain one or more await expressions.
//await is a keyword used to pause the execution of an asynchronous function until a promise is resolved or rejected.
//you cannot use await outside of an async function. If you try to do so, you will get a syntax error.
//async functions always return a promise. If the function returns a value, it will be wrapped in a resolved promise. If the function throws an error, it will be wrapped in a rejected promise.

async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies');
        const data = await response.json();//without await it will return a pending/rejected promise instead of the actual data
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchData();
//In this example, the fetchData function is declared as asynchronous using the async keyword. Inside the function, we use the await keyword to pause the execution until the fetch promise is resolved and we get the response. Then we use await again to parse the response as JSON. If any error occurs during the fetch or parsing process, it will be caught in the catch block and logged to the console.    

//no need to write await
async function example() {
        const result1 = 42;
        return result1; // This will return 42
}
//no need to write await
async function exampleWithError() {
        throw new Error("Something went wrong");
}

function f1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Result from f1");
        }, 1000);
    });
}
async function f2() {
    const result = await f1();
    console.log(result);
}

example().then(result => console.log(result)); // Logs 42
exampleWithError().catch(error => console.error('Error in exampleWithError function:', error)); // Logs the error message


//Example of async/await with a custom promise
function getInfo(){
    return new Promise((resolve,reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if(randomNumber < 0.5) {
                resolve(`Success: Random number is less than 0.5 (${randomNumber})`);
            } else {
                reject(new Error(`Failure: Random number is greater than or equal to 0.5 (${randomNumber})`));
            }
        }, 2000);
    })
}

async function displayInfo() {
    try {
        const result = await getInfo();
        console.log(result);
    } catch (error) {
        console.log('Error in displayInfo function:', error);
    }
}

displayInfo();