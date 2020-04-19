//The old Promise code

// movePlayer(100, 'Left')
//     .then(() => movePlayer(400, 'Left'))
//     .then(() => movePlayer(10, 'Right'))
//     .then(() => movePlayer(330, 'Left'))


//With Async Await

// async function playerStart() {
//     const firstMove = await movePlayer(100, 'left'); //pause
//     await movePlayer(400, 'Left'); //pause (It returns a promise)
//     await movePlayer(10, 'Right'); //pause
//     await movePlayer(330, 'Left'); //pause
// }

//Like synchronous programming we can either use firstMove variable to store the promise (not just .then .then)

//The big benefit of async await is that it makes code easier to read
//A code that's asynchronous look synchronous

// Promise Syntax

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(console.log)


//Async Await Syntax

// async function fetchUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
// }

// fetchUsers();

//We add await keyword to front of anything that returns a promise
//So now the function with await keyword is going to pause until we get a reponse from fetch
//Also we can store promise in a constant like  this:
// const reponse = await fetch('https://jsonplaceholder.typicode.com/


// a realistic example

const urls = [
    'https://jsonplaceholder.typicod.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//Promise syntax

// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json())
// })).then(results => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
// }).catch(() => console.log('error'))


//Async Await syntax

//We can write like this function expression
//We can also write like this async function getData() {.....

// const getData = async function () {
//     try {
//         const [users, posts, albums] = await Promise.all(urls.map(url => {
//             return fetch(url).then(response => response.json())
//         }))
//         console.log('users', users);
//         console.log('posts', posts);
//         console.log('albums', albums);
//     } catch (err) {
//         console.log('oops', err);
//     }

// }

// getData();



// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/starships/9/')
  const data = await response.json();
  console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('ooooooops', err);
  }
}