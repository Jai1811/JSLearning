//sync vs async

sync
function sync(){
    console.log("sync function");
}
sync();
console.log("after sync function");

const fs = require('fs');
//sync file read
try {
    const data = fs.readFileSync('xyz.txt', 'utf8');
    console.log("sync file read: " + data);
} catch (err) {
    console.error(err);
}
console.log("after sync file read");

