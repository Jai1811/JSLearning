//callback hell or pyramid of doom

asyncFunction((result1) =>{
    asyncFunction2(result1, (result2) => {
        asyncFunction3(result2, (result3) => {
            asyncFunction4(result3, (result4) => {
                console.log('Final Result:', result4);
            });
        });
    });
});


// To avoid callback hell, we can use Promises or async/await
// Using Promises
asyncFunctionPromise()
    .then(result1 => asyncFunction2(result1))
    .then(result2 => asyncFunction3(result2))
    .then(result3 => asyncFunction4(result3))
    .then(result4 => console.log('Final Result:', result4))
    .catch(error => console.error('Error:', error));

// Using async/await
async function main() {
    try {
        const result1 = await asyncFunction();
        const result2 = await asyncFunction2(result1);
        const result3 = await asyncFunction3(result2);
        const result4 = await asyncFunction4(result3);
        console.log('Final Result:', result4);
    } catch (error) {
        console.error('Error:', error);
    }
}