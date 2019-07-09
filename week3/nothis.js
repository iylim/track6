const person = {
  age: 0,
  growUp() {
    setInterval(() => {
      console.log(`I am ${this.age} years old`);
      this.age++;
    }, 1000);
  },
  getAge: () => {
    console.log(this.age); // Careful, won't work
  },
};

person.growUp();
