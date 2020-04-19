//Object spread operator
const animals = {
    tiher: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

const array = [1,2,3,4,5];
function sum(a, b, c, d, e) {
    return a + b + c + d + e; 
}

sum(...array); //returns 15  
// it equals sum(1,2,3,4,5)

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p1)
    console.log(p1)
}

const { tiger, lion, ...rest } = animals;

//tiger -> 23
//lion -> 5
//rest {monkey: 2, bird: 40}

objectSpread(tiger, lion, rest)
//Result is shown below
//23
//5
//{monkey: 2, bird: 40}
