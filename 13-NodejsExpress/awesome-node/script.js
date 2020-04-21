const fs = require('fs');

//Asynchronous
fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log('errrrroooorrrr');
    } //toString method using utf8 by default encoding
    console.log('Async', data.toString());
})
//Synchronous
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// APPEND

// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// WRITE

// fs.writeFile('bye.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// })

// DELETE

// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('Inception');
// })