//callback function
//async call/task

const arr = [1,2, 3,4, 5];

arr.filter(num => num % 2 === 0, 0).forEach(num => console.log(num)); //callback function synchonous

function printInfo(name, callback) {
    console.log(`Name: ${name}`);
    callback();
}

function printAge() {
    console.log('Age: 30');
}

printInfo('John', printAge); //callback function asynchronous


function printDetails(name, callback) {
    //async function
    setTimeout(() => {
        console.log(`Name: ${name}`);
        callback();
    }, 1000);
}

function printAge() {
    console.log('Age: 30');
}

printDetails('John', printAge); //callback function asynchronous

function fetchData(callback) {
    // Simulating an asynchronous data fetch with setTimeout
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(null, data);
    }, 2000);
}

function displayData(error, data) {
    if(error)
        console.error('Error fetching data:', error);
    else
    console.log('Fetched Data:', data);
}

fetchData(displayData); //callback function asynchronous