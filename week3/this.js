const dog = {
  name: 'Spots',
  whoAmI: () => {
    console.log(this.name);
  },
};

function whereAmI() {
  console.log(this);
}

dog.whoAmI();
whereAmI();
