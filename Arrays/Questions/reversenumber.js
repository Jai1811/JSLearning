const arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // Output: [5, 4, 3, 2, 1]

// Alternatively, you can also reverse the array using a loop
const arr2 = [1, 2, 3, 4, 5];
const reversedArr = [];
for (let i = arr2.length - 1; i >= 0; i--) {
    reversedArr.push(arr2[i]);
}
console.log(reversedArr); // Output: [5, 4, 3, 2, 1]    


reverseNumber = (num) => {
    let reversed = 0;
    while (num > 0) {
        const digit = num % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }
    return reversed;
};

const number = 12345;
const reversedNumber = reverseNumber(number);
console.log(reversedNumber); // Output: 54321