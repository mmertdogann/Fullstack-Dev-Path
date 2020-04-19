//finally

// const urls = [
//     'https://jsonplaceholder.typicode.com/users',
//     'https://jsonplaceholder.typicode.com/posts',
//     'https://jsonplaceholder.typicode.com/albums'
// ]

// Promise.all(urls.map(url => {
//     return fetch(url).then(response => response.json())
// })).then(array => {
//     throw Error;
//     console.log('Users', array[0])
//     console.log('Posts', array[1])
//     console.log('Albums', array[2])
//     })
//     .catch(err => console.log('ughhhh fix it!', err))
//     .finally(() => console.log('extra'));

// for await of

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

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

// //for of loop
// const loopThroughUrls = url => {
//     for (url of urls) {
//         console.log(url)
//     }
// }

// loopThroughUrls(urls);

//using for await of feature

const getData2 = async function() {
    //array of fetched promises of each url request
    const arrayOfPromises  = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) { // await because looping through promises
        const data = await request.json(); // await because request.json() is a promise
        console.log(data);
    }
} 

getData2();