//code to make a coffee using callback hell
function makeCoffee(callback) {
    setTimeout(() => {
        console.log("Grinding coffee beans...");
        callback();
    }, 1000);
}

function boilWater(callback) {
    setTimeout(() => {
        console.log("Boiling water...");
        callback();
    }, 2000);
}

function brewCoffee(callback) {
    setTimeout(() => {
        console.log("Brewing coffee...");
        callback();
    }, 3000);
}

function serveCoffee() {
    console.log("Serving coffee...");
}

// Using callback hell
makeCoffee(() => {
    boilWater(() => {
        brewCoffee(() => {
            serveCoffee();
        });
    });
});



//code to make a coffee using promise chaining
function makeCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Grinding coffee beans...");
            resolve();
        }, 1000);
    });
}

function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Boiling water...");
            resolve();
        }, 2000);
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Brewing coffee...");
            resolve();
        }, 3000);
    });
}

function serveCoffee() {
    console.log("Serving coffee...");
}

// Using promise chaining
makeCoffee()
    .then(boilWater)
    .then(brewCoffee)
    .then(serveCoffee)
    .catch((error) => {
        console.error("An error occurred:", error);
    
    });
    
