//Challenge -> https://adventofcode.com/2015/day/1
const fs = require('fs');
// 1 - What floor does Santa end up on
// ( --> should go UP  floor
// ) --> should go DOWN  floor

function question1() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q1 = santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        const answer = directionsArray.reduce((acc, currentValue) => {
            if (currentValue === '(') {
                return acc += 1;
            } else if (currentValue === ')') {
                return acc -= 1;
            }
        }, 0)
        console.timeEnd('q1 = santa-time');
        console.log('floor: ', answer);
    })
}

question1();

// 2- When does Santa first enter the basement (-1. floor)

function question2() {
    fs.readFile('./santa.txt', (err, data) => {
        console.time('q2 = santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '(') {
                accumulator += 1;
            } else if (currentItem === ')') {
                accumulator -= 1;
            }
            counter++;
            return accumulator < 0; //return when goal is met
        })
        console.timeEnd('q2 = santa-time');
        console.log('basement entered at: ', counter);
    })
}

question2();