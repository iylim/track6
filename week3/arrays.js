// Neither the length of a JavaScript array nor the types of its elements are fixed
const mixedArray = ['cat', 44, ['more things']];

// explicit declaration
const dogs = ['golden retriever', 'husky', 'pug', 'dalmatian'];
// or using constructor (creates empty array)
const newArray = new Array(); // const newArray = []
// specify default values
const emptyStrArray = new Array(5).fill('');

dogs.push('chihuahua'); // adds to end of array
dogs.pop(); // → 'chihuahua'

dogs.unshift('aussie');
dogs.shift(); // → 'aussie'

dogs.splice(1, 2); // → ['husky', 'pug']
dogs.splice(1, 2, 'black lab');

const newDogs = ['shiba', 'snoop'];
dogs.splice(1, 0, ...newDogs);

/* ==== Higher-order Array Functions ==== */
const filteredDogs = dogs.filter(dog => dog.length > 5);

const mappedDogs = dogs.map(dog => dog.toUpperCase());
const confusingArray = dogs.map((dog, i) => dog[i]);

const sortedDogs = dogs.sort(); // sorts lexographically
const moreSortedDogs = dogs.sort((left, right) => left.length - right.length);

const prices = [1, 2, 3.5];
const total = prices.reduce((accumulator, current) => accumulator + current, 0);
// also works great with strings!
const concatedDogs = dogs.reduce((acc, curr) => `${acc} ${curr}`, '');
