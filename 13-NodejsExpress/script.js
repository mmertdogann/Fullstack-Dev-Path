//import largeNumber from 'script2.js'; It will not work because it is not compatible
const script2 = require('./script2.js');

const a = script2.largeNumber;
const b = 7;

console.log(a + b);