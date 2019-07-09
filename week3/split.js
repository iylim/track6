const dogs = ['golden retreiver', 'husky'];
const cats = ['tabby', 'calico'];
let pets = [];

/* Verbose way to concat arrays */
dogs.forEach(function(dog, index) {
  console.log(index);
  pets.push(dog);
});
cats.forEach(function(cat) {
  pets.push(cat);
});

/* Slick way to concat arrays */
pets = [...dogs, ...cats];

/* Slick ES6 way to concat arrays */
const myStr = 'Kanye West';
const mySplitStr = [...myStr];
console.log(mySplitStr);
