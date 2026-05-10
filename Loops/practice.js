for (let index = 0; index < 10; index++) {
    console.log(index)
}

console.log("running while loop...")

let indexWhile = 0
while (indexWhile<10) {
    console.log(indexWhile)
    indexWhile++;
}

let indexOfDoWhile = 1;
do{
console.log("inside do while loop");
indexOfDoWhile++;
}while(indexOfDoWhile <= 10);

console.log("printing array elements")
let array = [1,2,3,4,6,"dasda"];

 for (let element in array) {

    console.log("ele",element)
}

let objectCreated = {
    "name":"xyz",
    "age":32,
    "Designition":"Senior QA"
}
let objectCreated2 = {
    "name":"dsasdf",
    "age":32,
    "Designition":"SDET"
}


for (let key in objectCreated) {
    
    const element = objectCreated[key];

    console.log(key,":",element); 
}

let arrayOfObjects = [objectCreated,objectCreated2]

for(let object of arrayOfObjects){
    console.log(object.name)
}