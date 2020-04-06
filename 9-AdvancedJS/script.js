/*
//let & const
const player = 'Mert';
let experience = 100;
let wizardLevel = false;
console.log('outside', wizardLevel);

if(experience > 90) {
    let wizardLevel = true;
    console.log('inside', wizardLevel);
}
console.log('again', wizardLevel);

//let scope can in if statement (like functions)
//const is a constant, that will not change valus

//But we can use const with objects and change it properties

const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
};

//We cannot do this
obj = 5;

//but we can do this
obj.wizardLevel = true;


//Destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
};

//this and
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//this syntax does exactly same thing of first two line above
const { player, experience } = obj;
let { wizardLevel } = obj;


//Object properties

const name = 'john snow';

const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi',
    [1 + 2]: 'hoho'
};


const a = "Simon";
const b = true;
const c = {};

const junk = {
    a: a,
    b: b,
    c: c
};

//If property and value same, we can write the object like this

const junk = {             //const junk = { a, b, c };
    a,
    b,
    c
};


//Template strings
const name = "Sally";
const age = "34";
const pet = "horse";

const greeting = "Hello " + name + " you seem to be doing " + "greeting" + "!";

//We can do this way
const greetingBest = `Hello ${name} you seem to be ${age-1}. What a lovely ${pet} you have.`;
console.log(greetingBest);


//Default arguments

function greet(name='', age=30, pet='cat') {
    return `Hello ${name} you seem to be ${age-1}. What a lovely ${pet} you have.`;
}

//New Type = Symbol (They are completely unique type)
let sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

sym2 === sym3 //false


//arrow functions

function add(a, b) {
    return a + b;
}

//same
const add2 = (a, b) => a + b; // => means function

//also we can write like this

const add3 = (a, b) => {
    return a + b;
}


//Advanced funtions

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran. the function executed. It's never going to executed again. BUT it's going remember that here are references to those variables so the child scope always has access to the parent scope.


//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4); //12
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(4); //20

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5); //7


//Avoiding Side Effects, functional purity.
//Do not change outside scope's variables (outside of the function) inside the function.
//We do the processes in an exact way. The function always return same output from the same input.
//Our function is must be imperative (predictable, certain, exact). And not mutate the data.
// And always return something (no undefined)


//Advanved arrays
var array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    
    double.push(num * 2)
});

console.log('forEach', double);



//map

const mapArray = array.map((num) => {
    return num * 2;
});
//If we have single parameter, we can write this map operation like this:
//const mapArray = array.map(num => num * 2);

// map restrict the operation, it needs to return something
// forEach is not strict than map operation, it is just iterate and do
// whatever in the function blog
// map transforms the array to another array (mapping)
// in the forEach we cannot return anything so we need to 
// create an another array and push the values on it
// in forEach we do a lot of side effects within the functon (console.log, create new array and push and return undefined)
// but in map operation we just return something and has no side effect, not mutate the data
console.log('map', mapArray);

//filter

const filterArray = array.filter((num) => {
    return num > 5;
});
//Because of single parameter, we can write like this:
//const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0) //accumulator's default value (starter)

//accumulator is something that we can store the information
//that has happened in the body of the function
//accumulator is like sum += number, everytime we store the changes on the sum variable

console.log('reduce', reduceArray);

//all the map, filter and reduce operations are pure
//because every time we do an operation whatever inputs
// we get in it always return a value and there are no side effects


//Advanced objects
//reference type
[] === []; //false
[1] === [1]; //false
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
object1 === object2; //true, because same reference
object1 === object3; //false, different references
object1.value = 15;
console.log(object2.value); //15
console.log(object3.value); //10

//context (where we are within the object), (different than scope)
//scope vs context
function b() {
    let a = 4;
}
console.log(a); //reference error,
//global (root) scope does not know anything about inside the function
//the function has different scope (its own universe)
//but in context
console.log(this); // Window object
console.log(this === window); //true
//this means, what is the object environment that we are in right now
function a() {
    console.log(this); //Window object
    //Look at that, it is different than scope. We are still in the windows object
    //this still refer to the window object, we are inside the window object right now
}

const object4 = {
    a: function() {
        console.log(this); //object4
    }
}


//instantiation (make a copy (instances) of the object and reuse the code)
class Player {
    constructor(name, type) {
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }
    introcude() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('Wizard', this);
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

//Classical Inheritance Before ES6
// var Player = function (name, type) {
//     this.name = name;
//     this.type = type;
// }

// Player.prototype.introcude = function () {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// }

// var wizard1 = new Player('Shelly', 'Healer');
// var wizard2 = new Player('Shawn', 'Dark Magic');

// wizard1.play = function () {
//     console.log(`WEEEEEE I'm a ${this.type}`);
// }

// wizard2.play = function () {
//     console.log(`WEEEEEE I'm a ${this.type}`);
// }


 //Copying arrays
var c = [1,2,3,4,5];
var d= [].concat(c);
d.push(1995);
console.log(c); //[1,2,3,4,5]
console.log(d); //[1,2,3,4,5,1995]

//Copying objects
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}; //same thing (clonning obj)

obj.c = 5;
console.log(obj);   //  {a: 'a', b: 'b', c: 'c'}
console.log(clone);  //  {a: 'a', b: 'b', c: 5}
console.log(clone2);  //  {a: 'a', b: 'b', c: 5}


//Deep copy
let obj = {
    a: 'a', 
    b: 'b', 
    c: {
        deep: 'try and copy me'
    }
};
//Shallow clone (It is only clone the first level)
let clone = Object.assign({}, obj);
let clone2 = {...obj}; //same thing (clonning obj)
//Deep Clone (copy)
let superClone = JSON.parse(JSON.stringify(obj)) //JSON.stringify convert everything in the object to string

obj.c.deep = 'hahaha';
console.log(obj);    // {a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone);  // {a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(clone2); // {a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(superClone); // {a: 'a', b: 'b', c: { deep: 'try and copy me' } }

//If the object that deep copied is a extremely big object; it may cause performance issue

//Type Coercion (Converting types to equivalent values) (==)
1 == '1' //true    (1 == 1)
1 === '1' //false (compare the values without coerce)
if (1) { //Always true (transform 1 to true)
    console.log(5);
}
1 == [1] //true
0 == false //true
0 == "" //true
"true" == true //false
1 == "true" //false
1 == true //true

-0 === +0 //true
Object.is(-0,+0) //false
NaN === NaN //false (Not a Number)
Object.is(NaN, NaN) //true


//ES7 - includes method (for strings and arrays)
'Hellooooo'.includes('o'); //true
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog'); //true

//ES7 - Exponential operator
const square = (x) => x**2;
square(5); //25


//ES8 - String padding
'Turtle'.padStart(10); //It makes spaces (6) beginning of the stringincludes the string (total 10 character)
//'    Turtle'
'Turtle'.padEnd(10); //It makes spaces (6) end of the stringincludes the string (total 10 character)
//'Turtle    '

//ES8 - Ending comma
const fun = (a,b,c,d,) => {
    console.log(a);
}

fun(1,2,3,4,); // Output: 1

//ES8 - Extra methods on the Objects
//Iterate through on the objects
Object.values  //New way
Object.entries //New way
Object.keys    //Old way

let obj = {
    username0 : 'Santa',
    username1: 'Rudolf',
    username2: 'Mr.Grinch'
};
//Before ES8
Object.keys(obj).forEach((key, index) => {  //Iterate 1 by 1 like an array
    console.log(key, obj[key]);
}); 

//After ES8
Object.values(obj).forEach(value => { //Just get the values in the object ('Santa', 'Rudolf', 'Mr.Grinch')
    console.log(value);
});

Object.entries(obj).forEach(value => { //Get an array of key and value pairs ["username0, "Santa"], ["username1, "Rudolf"], ["username2, "Mr. Grinch"]
    console.log(value);
});

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});

//ES8 - Async Await (We will cover these topics next lectures)



//ES10 - .flat() use on arrays

const array = [1, [2, 3], [4, 5]];
array.flat(); //[1, 2, 3, 4, 5]

const array2= [1, 2,[3,4,[5]]];
array2.flat(); //[1,2,3,4, Array(1)]  (only 1, 2,3 and 4 flatted. 5 will stay in a single array because its inside of inside of an array (2 layer deeper)) Like this: [1,2,3,4,[5]]
array2.flat(2); // [1,2,3,4,5] because we use 2 value with the flat method to flat 2 layer deeper

//Use flat to clean up the data
const entries = ['bob', 'sally',,,,,,,, 'cindy']; //commas are empty values
entries.flat(); // ['bob', 'sally', 'cindy']

//ES10 - flatMap() it adds a creature into the array that will be flatten
const arrayChaos = array.flatMap(creature => creature + 'XD'); //["1XD", "2,3XD", "4,5XD"]
const arrayChaos2 = array2.flatMap(creature => creature + 'XD'); //["1XD", "2XD", "3,4,5XD"]

//ES10 - trimStart() and trimEnd()

const userEmail = '       eddytheeagle@gmail.com';
const userEmail2 = 'johnnydangerous@gmail        ';
userEmail.trimStart(); // "eddytheeagle@gmail.com"
userEmail2.trimEnd();  // "johnnydangerous@gmail"

//ES10 - fromEntries() It transforms a list of key value pairs into an object
const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];
const obj = Object.fromEntries(userProfiles); // ({commanderTom: 23, derekZlander: 40, hansel: 18})
//It transformed the array into an object
//Make opposite (Transform key value pairs in the object to an array)
Object.entries(obj); //[['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]];

//ES10 try-catch block
try {
    4 + 5
} catch { // Before ES10 we have to write catch (error) (error: Error Type)

}


//Javascript Loops

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};
//forEach
basket.forEach(item => {
    console.log(item);
})

//for of (iterating)  Iterables: Arrays, Strings
for (item of basket) {
    console.log(item);
}

//for in  (works with objects) It works with object properties
//We are not iterating, we are enumerating (for objects)
for (item in detailedBasket) {
    console.log(item);
} 

//Objects are not iterable
for (item of detailedBasket) {
    console.log(item); //It will not work
} 

//Under the hood we think of JS arrays like object
for (item in basket) {
    console.log(item); // 0 1 2
} 
//Like this
basket = {
    0: 'apples',
    1: 'oranges',
    2: 'grapes'
}

//Debugging
const flattened = [[0,1], [2,3], [4,5]].reduce(
    (accumulator, array) => {
        debugger;
        return accumulator.concat(array);
    
    }, []);
//Result: [0,1,2,3,4,5]

*/
//Asynchronous Programming
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');


























