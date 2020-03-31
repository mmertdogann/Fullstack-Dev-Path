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

//this
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
*/

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





