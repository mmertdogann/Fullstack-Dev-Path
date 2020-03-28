/*
// Function declaration
function sayHello() {
    console.log("Hello");
}

sayHello();

//Function expression
// In Javascript, functions are variables. 
var sayBye = function() { //Anonymous Function (no name, we reference it to sayBye)
    console.log("Bye");
};

sayBye();


//Arrays
var list = ["tiger", "cat", "bear", "bird"];
list.concat("lion");
console.log(list);

//list.shift -- remove first element
//list.pop -- remove last element

//list.push -- add element end of the list
//list.unshift -- add element begining of the list


//Objects
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() { //Method
        console.log("AHHHHHH!");
    }
};

user.favouriteFood = "snipanch";
user.isMarried = true;

var list = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "jess",
        password: "123"
    }
];

//Empty objects
var emptyObj = {};
var emptyList = [];

//We can do emptyObj.name  ="Andy"

//Null type (There is nothing in)
var nullObj = null;

//We cannot do nullObj.name  ="Andy"


//Simple Facebook
var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];

var newsFeed = [
    {
        username: "Booby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cooool! :)"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function signIn(user, pass) {
    if (user === database[0].username && 
        pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);


//forEach (new in ECMAScript 5)
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

todos.forEach(function(i) { 
    console.log(i);
})

// can be write as
todos.forEach(function(todo) { 
    console.log(todo);
})

//if we want to access indexes
todos.forEach(function(todo, i) { 
    console.log(todo, i);
})

//also we can write forEach like this
function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);

*/

//Simple Facebook2
var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }

];

var newsFeed = [
    {
        username: "Booby",
        timeline: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cooool! :)"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preety cooool! :)"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

signIn(userNamePrompt, passwordPrompt);
























