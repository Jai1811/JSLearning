const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook', 'Asabeneh', 'Mathias', 'Elias', 'Brook'];

const uniqueNumber = new Set(number);
const uniqueNames = new Set(names);

console.log(uniqueNumber);
console.log(uniqueNames);

console.log(uniqueNumber.size);
console.log(uniqueNames.size);

uniqueNumber.add(11);
uniqueNames.add('Eyob');

console.log(uniqueNumber);
console.log(uniqueNames);

uniqueNumber.delete(1);
uniqueNames.delete('Asabeneh');

console.log(uniqueNumber);
console.log(uniqueNames);

uniqueNumber.clear();
uniqueNames.clear();

console.log(uniqueNumber);
console.log(uniqueNames);       