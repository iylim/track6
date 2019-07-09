/* ================= var =================== */

const str = 'Hello, TP';

function countDogs(puppers) {
  console.log(str); // This is ok
  return puppers.length;
}

function sayHello() {
  const hello = 'Hi';
}

// console.log(hello); // No good

for (var i = 0; i < 5; i++) {
  // do nothing
}

console.log(i); // Actually works... ➝ 5

/*  ================ let ====================== */

// if (true) {
//   let y = 5;
// }

// console.log(y); // Doesn't work, as expected

/* ================= const ==================== */

const dogs = ['husky', 'lab'];
// dogs = ['pug']; // No good
dogs.push('pug'); // All good
console.log(dogs);

console.log('Something');
console.log('fun');
