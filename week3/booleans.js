/* Checking booleans */

// Double Bang (!!) - returns the truthy or falsy evaluation of the expression
// console.log(Boolean("false"));

pet.name
  ? console.log(pet.name)
  : console.log("Your pet is sad that they don't have a name");

// const str = "5";
// const num = 5;

/* Equality Operators */
// console.log(str = num); // ➝ Error: Assignment to a variable
// console.log(str == num); // ➝ true
// console.log(str === num); // ➝ false

// const bool = true;
// let pet = {};
// console.log(bool == pet);

/* Logical Operators - "Short Circuit" */
// let pet2 = true && "hello";
// console.log(pet2); // ➝ "hello"

// let pet2 = true || "hello";
// console.log(pet2); // ➝ true

/* Defaulting Examples */

// const myPet = {
//   breed: 'dalmation'
// }
// getName(myPet);

// function getName(pet) {
//   if (pet) {
//     name = pet.name;
//   } else {
//     name = "Default";
//   }
// }

// function getName(pet) {
//   if (pet.name) {
//     console.log(pet.name);
//   } else {
//     console.log("This is a default");
//   }
// }

// function getName(pet) {
//   console.log(pet.name || "Default");
// }
