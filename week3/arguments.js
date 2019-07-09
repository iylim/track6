function makeFruitSalad(friend, ...fruits) {
  console.log(`I'm making a fruit salad for ${friend}`);
  fruits.forEach(fruit => console.log(`Yum ${fruit}!`));
  // The old way to do it
  // for (let i = 0; i < fruits.length; i++) {
  //   console.log(`Yum ${fruits[i]}`);
  // }
}

makeFruitSalad('Cody', 'strawberry', 'melon', 'grape');
