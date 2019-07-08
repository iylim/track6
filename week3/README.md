# Week 3: JavaScript

- [JavaScript and ECMAScript](#JavaScript-and-ECMAScript)
- [Grammar and Good Practices](#Grammar-and-Good-Practices)
  - [Commenting](#Commenting)
  - [Declarations and Scoping](#Declarations-and-Scoping)
- [Types](#Types)
  - [Object](#Object)
  - [Primitives](#Primitives)
- [Operations](#Operations)
- [Program Structure](#Program-Structure)
  - [Control Flow](#Control-Flow)
  - [Error Handling](#Error-Handling)
- [Functions](#Functions)
  - [Function Expression](#Function-Expression)
  - [Arrow Function](#Arrow-Function)
  - [Higher-order Function](#Higher-order-Function)
  - [Closures](#Closures)
- [Arrays](#Arrays)
  - [Iterators](#Iterators)
  - [Tuples](#Tuples)
- [OOP (Object Oriented Programming)](#OOP-Object-Oriented-Programming)
  - [Why do we care?](#Why-do-we-care)
  - [Basics: Objects](#Basics-Objects)
  - [The Secret Life of Objects](#The-Secret-Life-of-Objects)
  - [Basics: Prototypes](#Basics-Prototypes)
  - [New-ish: ES6 Classes](#New-ish-ES6-Classes)
  - [Theory of OOP](#Theory-of-OOP)
- [Functional Programming (FP)](#Functional-Programming-FP)
- [Debugging](#Debugging)
- [ES6 Goodies (Mixed Bag)](#ES6-Goodies-Mixed-Bag)
- [Modules](#Modules)
- [Asynchronous Programming](#Asynchronous-Programming)
  - [Callbacks](#Callbacks)
  - [Promises](#Promises)
  - [Async/Await](#AsyncAwait)
- [Jest](#Jest)
  - [Unit](#Unit)
  - [Integration](#Integration)
  - [End-to-end (E2E)](#End-to-end-E2E)
- [Project](#Project)
- [Resources](#Resources)

## JavaScript and ECMAScript

Show off video: [Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)

JavaScript: A programming language.

ECMAScript: A standard for scripting languages.

JavaScript is an **IMPLEMENTATION** OF ECMAScript. There is a group of people called the European Computer Manufacturer's Association (ECMA) that come up with all of the rules and regulations for what a good scripting language should have.

When we say:

- ES5
- ES6 / ES2015
- ES.Next (everything else determined by year of release)

JavaScript moves as quickly as it can with the standards, but the standards will always be ahead of the implementation.

The language is constantly evolving and will add new features after you finish this cohort training. Keep up with the new features, but understand that not all new features can be supported in legacy systems.

Check out this [compatibility chart](https://kangax.github.io/compat-table/es6/) to see what I mean.

## Grammar and Good Practices

### Commenting

As a developer, you should make sure your code is as readable and helpful to other developers as possible. It doesn't need to start that way (hacky code is always nice to start out), but your final code should be documented clearly.

- Single Line comments:

```js
// Welcome to JS!
```

- Multi-line comments:

```js
/*
 * These are multi-line comments.
 * You can just put anything in here and
 * white-space won't effect the comments.
 */
```

- [JSDoc Hints](https://devhints.io/jsdoc): Standard JavaScript documentation.

```js
/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */
function foo(n) {
  return n;
}
```

### Declarations and Scoping

- `var`

  - Older style syntax
  - Scoped globally (exists outside of the block).

  ```js
  if (true) {
    var x = 5;
  }
  console.log(x); // x is 5
  ```

  - Loosest of the rules for variable declaration.

- `let`

  - Newer ES6 style syntax
  - Scoped to the block.

  ```js
  if (true) {
    let y = 5;
  }
  console.log(y); // ReferenceError: y is not defined
  ```

  - Lets you reassign and mutate variables

- `const`

  - Newer ES6 style syntax
  - Scoped to the block.
  - Only allows for mutating of variables.

  ```js
  // Reassignment of 'f' causes problems
  const f = 5;
  f = 6; // ERROR
  ```

  ```js
  // Objects can be mutated, not reassigned
  const MY_OBJECT = { key: 'value' };
  MY_OBJECT.key = 'otherValue';
  ```

  ```js
  // Arrays can be mutated, not reassigned
  const MY_ARRAY = ['HTML', 'CSS'];
  MY_ARRAY.push('JAVASCRIPT');
  console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
  ```

## Types

I sorted these into types that I use frequently. I figured it be useful to study things that might appear more often.

### Object

Javascript has an `Object` type that wraps all things during execution. This will be discussed further in the OOP section

### Primitives

#### String

- Properties:

  - Represents text
  - Array-like structure of characters
  - Special characters can be escaped with a `\` (backslash)

  ```js
  // Using the "new line" escaped character
  console.log('Something\nFun');
  /* Expected Output:
   * Something
   * Fun
   */
  ```

- Basic Operations:
  - `+`: Concatenates two strings into one
  - There is a ton of operations on strings. Please refer to the [MDN - Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) section of the docs to learn more.

#### Boolean

- Properties:
  - true of false

Make sure to include information about [Truthy and Falsy](https://www.sitepoint.com/javascript-truthy-falsy/). It is important to know that JavaScript has implicit type coersion to ensure a flexible runtime.

#### Number

- Properties:
  - 64-bit value
  - Integer or float
  - Positive or negative
  - Special `Number` key words:
    - `Infinity`: behaves an acts like infinity
    - `-Infinity`: negative value
    - `NaN`: Returned when Math functions fail
- Math Details:
  - Order of operations (PEMDAS) still applies
  - All operations on numbers result in floating-point arithmetic.
    - `/`: Standard division does not truncate decimal values; it maintains floating point precision.
    - `%`: Modulus operator still takes the remainder.
    - Since floating-point rules apply, be careful of high-precision results; you could lose precision.

#### undefined

From the MDN docs:

> A variable that has not been assigned a value is of type undefined. A method or statement also returns undefined if the variable that is being evaluated does not have an assigned value. A function returns undefined if a value was not returned

#### null

> Definition: the intentional absence of any value.

`null` is case-sensitive:

- `null` does not equal `Null` or `NULL`, etc.

#### Symbol (New)

> Definition: A symbol is a primitive which cannot be recreated.

<!-- TODO: Get more info and figure this stuff out. -->

#### BigInt (New)

> Definition: a built-in object that provides a way to represent whole numbers larger than 2^53

<!-- TODO: Get more info and figure this stuff out. -->

## Operations

## Program Structure

### Control Flow

#### If/else

Standard logic conditional to control program flow.

```js
if() {
  // do something
} else if() {
  // do something based on the 'conditon'
} ... {

} else {

}

```

#### Switch

A clean way of doing if / else chains.

The below example accepts a Number as input, and can match that number to a specific "case" in the switch statement.

Once the case is matched, you execute the code until the break.

- If no `break` exists, then the code will "fall through" to the next `case`.
- If no `case` is matched, you execute the `default` code.
- If no `default` case exists, then the code will just bypass all logic in the `switch` like normal `if` execution.

```js
switch (numOfStudents) {
  case 1:
    // do something;
    break;
  case 2:
  case 3:
    // do something;
    break;
  default:
  // do some default behavior.
}
```

You can accept any value that can be equated in the parameter of the switch statement. For example:

```js
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruittype + '.');
}
```

### Error Handling

#### Try / Catch

When you have a block of code that could be prone to errors / bugs, you might want to wrap it in a `try {}` block. However, every `try` block should have a proceeding `catch() {}` block along with it

```js
const getUserData (database) {
  try {
    const data = database.find('user');
  } catch (err) {
    console.log(err);
  }
}
```

If the code within the `try` block fails:

- It immediately generates an `Error` object that breaks the normal programming flow.
- This object will travel up the call stack until something resolves the error or the program crashes.

The first thing that could resolve the error is the `Catch` block. In the code snippet above, `err` is the `Error` object that was generated when `database.find('user')` failed. All we do with the error is resolve it by logging it to the console. Since I don't know what to do with the error right now, logging it is the best I can do.

#### Throw

Continuing our example from above, a better solution to handling an error we don't know what to do with is to `throw` the error.

```js
const getUserData (database) {
  try {
    const data = database.find('user');
  } catch (err) {
    console.log(err);
    throw err; // DEV: Now I added a throw expression.
  }
}
```

Now, my error handling allows whatever called `getUserData()` to deal with the error and logs the issue where it happened (better for debugging).

**Just be careful!** If you never resolve the problem and continue to throw the error, your program will crash.

#### Finally (new to JS)

Continuing our example from above... If I had something that **MUST** be done after my `try` and `catch` blocks, it can be done in a `finally` block.

```js
const getUserData (database) {
  try {
    const data = database.find('user');
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    console.log('Database operations: Finished'); // DEV: log when done.
  }
}
```

Now, in my `finally` block, I log when this function completes **NO MATTER WHAT**.

If the `try` block is:

- Successful: `try -> finally`
- Unsuccessful: `try -> catch -> finally`

**Just be careful!** If you have code that fails in the finally, there is no `catch` block to save you.

## Functions

### Function Expression

- `this` binding: Bind the `this` property to the caller of the function.
- `return`: Standard function expression do not have an implicit return. You have to be clear in what you return if you use this notation.
- `constructors`: Common use as a constructor in vanilla js.
  - `prototype`: You can construct an object with a function expression because it has an associated prototype.

```js
function doSomething(param1, param2) {
  // do something
  return true;
}
```

### Arrow Function

- `this` binding: Do not have their own `this` binding.
- `return`: Arrow functions have two forms and each affects the return of the function.
  - Block body: Needs to have a return statement to return
  - Concise body: Will implicitly return your last statement.
- `constructors`: Cannot be used as constructors.
  - `prototype`: Arrow functions do not have a prototype attatched.

Block Body:

```js
const doSomething = (param1, param2) => {
  // do something
  return true;
};
```

Concise Body:

```js
const doSomething = (param1, param2) => true;
```

**NOTE:** Arrow functions make poor object methods because

### Higher-order Function

### Closures

## Arrays

### Iterators

### Tuples

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

### The Secret Life of Objects

<!-- TODO: Figure out what this is... -->

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

Encapsulation gives you a space that is separated from the outside environment (in loose terms).

#### Inheritance

I have something that is strongly related to another thing. Maybe they have some sort of relationship or share data / functionality

Inheritance allows you to build relationships between objects so that you do not have to rewrite code in those objects.

Ex: Everything in JS is an object. The `String` class **inherits** from the `Object` class to get some basic methods.

**WARNING** Inheritance can be dangerous if too vertical relationships are made. Changes in the base class ripple down through all child classes.

#### Polymorphism

More advanced, can be covered later.

## Functional Programming (FP)

## Debugging

## ES6 Goodies (Mixed Bag)

- Declaration:
  - Let
  - Const
- Spread / Rest Operator
- Arrow Functions: Covered in detail under the [Functions Section]()
- Destructuring

## Modules

## Asynchronous Programming

### Callbacks

### Promises

### Async/Await

## Jest

### Unit

### Integration

### End-to-end (E2E)

## Project

- data manipulation
- makeshift server

## Resources

- [Weird History of JavaScript](https://www.youtube.com/watch?v=Sh6lK57Cuk4)
- [Course Overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Truthy and Falsy](https://www.sitepoint.com/javascript-truthy-falsy/)
- JS Basics:
  - [EloquentJS - Values](https://eloquentjavascript.net/01_values.html)
  - [MDN - Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
  - [MDN - Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
  - [MDN - Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
  - [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
  - [Classes](https://www.javascriptjanuary.com/blog/es6-classes)
  - [Pillars of OOP](https://www.quora.com/What-are-the-4-pillars-of-OOPs)
  - [ES6 Classes](https://www.javascriptjanuary.com/blog/es6-classes)
- Compatibility:
  - [Chart by kangax](https://kangax.github.io/compat-table/es6/): massive lookup table of everything JS
