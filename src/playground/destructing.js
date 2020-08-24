// //Object Destructing

// console.log("Destructing");

// const person = {
//     name: 'Jay',
//     age: 23,
//     location: {
//         city: 'Peterborough',
//         temp: -20
//     }
// };

// // const person = person.name;
// // const age = person.age;

// const {name= 'Anonymous',age} = person;

// console.log(`${name} is ${age}`);

// const {temp: temperature,city} = person.location;

// console.log(`It's ${temperature} in ${city}`);

// Array Desctructing

const address = ['1200 Talwood ct.', 'Peterborough', 'Ontario', 'K9j7x3'];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);