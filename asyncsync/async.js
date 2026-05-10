
const fs = require('fs');

async
console.log("before async function");
function async(){
    setTimeout(function(){
        console.log("async function");
    }, 1000);
}
async();
console.log("after async function");

//async file read
fs.readFile('xyz.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("async file read: " + data);
});
console.log("after async file read");