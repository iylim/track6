# Week 3: JavaScript

- Values, Types, and Operators
- Program Structure
- Functions
  - callbacks
  - arrow functions
  - closures
- Class
  - **constructors**
  - prototypes
- Strings
  - template literals
  - advanced objects: Map, Set
- Arrays
- Objects
  - OOP
  - protoypes and inheritance
- Higher-order Functions
- The Secret Life of Objects
- Bugs and Errors
  - try, catch
- ES6 goodies
  - spread, rest
  - arrow functions
  - destructuring
  - let, const, var
- Modules
- Asynchronous Programming
  - callbacks
  - promises
  - async/await
- Jest

## Project

- data manipulation
- makeshift server

## OOP (Object Oriented Programming)

### Why do we care?

JavaScript is full of objects. In fact, you could go so far to say that _EVERYTHING_ in JavaScript is an object.

_If people feel skeptical, tell them to wait for the prototype chain part_

We want to be able to make something that has data and manipulate that data in an organized, scalable, extensible way.

### Basics: Objects

#### Anatomy of an Object

- **Property:** any key / value pair where:
  - Key: must be a string or [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
  - Value: anything

#### Execution

There are a few ways to make raw objects.

```js
const obj1 = {};
const obj2 = Object.create();

//----------Functions-----------------

function MyObject() {
  return {};
}
obj3 = MyObject();

function MyConstructor(name) {
  this.name = name;
}
obj4 = new MyConstructor('bob');
```

Teaching Instructions:

- Start attaching things to the object and showing how JavaScript is a dynamic language.
- Show that variables and functions being values in a property.

### Basics: Prototypes

How do we know what an object should do? How are we supposed to interact with these various things that are floating around our program?

Traditionally,

When you make a string:

```js
const str = 'hello';
```

Teaching instructions:

- Dive into the object
- Take a look at the \_proto\_ chain of each of these things and explain that everything has attached functionality, because everything is an object.
- Add a method to the prototype chain and make multiple objects from it.

That string variable `str` gets converted into the JavaScript equivalent of the `String` class. Each of those strings have available methods (modifiers of class data) to use.

![String methods](console-string-methods.png)

And this is what it looks like when you investigate the String \_proto\_ that is attached to every String object.

![String prototype](console-string-prototype.png)

### New-ish: ES6 Classes

A stylistic wrapper to make OOP easier to use is `class` syntax. A class is a template that can be used to construct objects. If you are more familiar with C-based languages, this will feel right at home.

```js
class Pet {
  constructor(name) {
    this.name = name;
  }
}

const dog = new Pet('Max');
```

We are not just limited to data as well; we can supply methods to manipulate said data.

```js
class Pet {
  static isDog(animal) {
    return Object.getPrototypeOf(animal).constructor.name === this.name;
  }

  constructor(name) {
    this.name = name;
  }

  doTrick(trick) {
    console.log(`I can ${trick}. Watch this!`);
  }
}
```

Methods can be added to classes:

- `doTrick(trick)` is a method specific to the object instance. In other words, it is used to manipulate data that could be changed among objects of the same class.
- `isDog(animal)` is a static method. Static methods are like prototypes where they can be shared among objects and their effects are the same.

```js
class Pet {
  constructor(name) {
    this.name = name;
  }

  doTrick(trick) {
    console.log(`I can ${trick}. Watch this!`);
  }
}

class Dog extends Pet {
  constructor(name) {
    super(name);
  }

  sit() {
    console.log(`I am sitting`);
  }
}

const myDog = new Dog('Mike');
myDog.doTrick('jump');

// Output: I can jump. Watch this!
```

Inheritance can also be used with the `extends` key word. Classes the inherit must use the `super` keyword to pass data to the parent's constructor to initialize data.

### Theory of OOP

Four pillars of OOP:

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

#### Abstraction

In computers we never make the things we represent; we make abstractions of those concepts. OOP can represent real-life objects like animals, cars, people. However, it can also represent a process or idea. Not everything needs to be real, but objects can create structure for it, nonetheless.

#### Encapsulation

Do you want data to be relevant to the object? Do you want methods to manipulate that data?

Encapsulation gives you a space that is seperated from the outside environment (in loose terms).

#### Inheritance

I have something that is strongly related to another thing. Maybe they have some sort of relationship or share data / functionality

Inheritance allows you to build relationships between objects so that you do not have to rewrite code in those objects.

Ex: Everything in JS is an object. The `String` class **inherits** from the `Object` class to get some basic methods.

**WARNING** Inheritance can be dangerous if too vertical relationships are made. Changes in the base class ripple down through all child classes.

#### Polymorphism

More advanced, can be covered later.

## Resources

- [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Classes](https://www.javascriptjanuary.com/blog/es6-classes)
- [Pillars of OOP](https://www.quora.com/What-are-the-4-pillars-of-OOPs)
- [ES6 Classes](https://www.javascriptjanuary.com/blog/es6-classes)
