let arr = [1,23,56,74,32,545,834567];
let arr2  = [];
let arr4 = ['','sas','dasfwe'];
let arr5=["asd","gwdg","dasda"];
let arr3 = [12,23,"sadfaf",false]

//add an element to an array at the end
arr.push(12);
arr.push(12,323);
console.log(arr)

//2. pop remove last element from the array
console.log(arr.pop())
console.log(arr)

//3. shift take out the first element from the array
arr.shift()
console.log(arr);

//4. unshift add one or more element and return the lenght

arr.unshift(1,12)
console.log(arr)

//5. spice method remove elements from specific index to specific index exlusive and replace it with another number if that number is provided as 3rd parameter

arr.splice(0,2);
console.log(arr)


//6. slice method returns a sub array inclusive of the start, if -1 given as a parameter then it means last element
console.log(arr.slice(0,3))
console.log(arr.slice(-1));

//7.
let f = arr.concat(arr4);
console.log(f);

//8. indexOf first index of once the element is found in the array return -1 if not found

console.log(arr.indexOf(12));

//9. includes

console.log(arr.includes(56));


//forEach

arr5.forEach((e)=>{
    console.log(e)
});

//filter and toSorted
arr.filter(val=>val%2==0).sort().forEach(val=> console.log(val));

//map
arr.map(e=>e*2).forEach(val=>console.log(val));

//reduce
maxNumber = arr.reduce((a,b)=>Math.min(a,b))
console.log(maxNumber)

//find
numberDivisibleBy = arr.find(e=>e%74==0);
console.log(numberDivisibleBy);

//every Is every element this?
console.log(arr3.every(e=>typeof(e)=='number'));
console.log(arr.every(e=>typeof(e)=='number'));

//some
arr3.some(e=>typeof(e)=='boolean')

//reverse()
arr3.reverse()
console.log(arr3);
