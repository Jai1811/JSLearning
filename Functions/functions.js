//1.  you can access this method from anywhere even before its initialized
console.log(add(3,4));

function add(a,b){
    return a+b;
}

//you cannot access this before initialization
// console.log(mutiply(2,4));

//2.Function expression Anonymous function
const mutiply = function(x,y){
    return x*y;
}

const mul = mutiply(4,6);
console.log(mul);

//3. Arrow Function expression
let printArrowFunction = ()=>console.log("this is an arrow function");
const divide = (x,y) => x/y;

printArrowFunction();
console.log(divide(10,7));


//4. Function constructor
const substract = new Function('a','b','return a-b;');
console.log(substract(10,8));

//5. IIFE(Immediately Invoked Function Expression)
(function()
{
    console.log("IIFE function");
})();

//6. generator function just an iterator from java

function* generateNumberSequence(){
    yield 2;
    yield 3;
    yield 3;
    yield 4;
    yield 5;

}

const generator = generateNumberSequence();
console.log(generator.next().value);

//7. Anonymous function (function having no name)
//no name
const number = [1,2,3,54]
const squareofNumbers = number.map(e=> e*e);
console.log(squareofNumbers);


//8. Recursive function
function fact(n){
if(n==0 || n==1){
    return 1;
}
else
    return n*fact(n-1);
}

console.log(fact(5));

//9. Higher-Order Function

function addition(a,b){
    return a+b;
}

function operate(functName,a,b){
    return functName(a,b);
}

console.log(operate(addition,3,4));