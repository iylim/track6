# Week 3: JavaScript

- [The Birth and Death of JavaScript (video)](#The-Birth-and-Death-of-JavaScript-video)
- [Grammar and Good Practices](#Grammar-and-Good-Practices)
- [Types](#Types)
  - [String](#String)
  - [Boolean](#Boolean)
  - [Number](#Number)
  - [null](#null)
  - [undefined](#undefined)
  - [Object](#Object)
  - [Symbol](#Symbol)
  - [BigInt (New)](#BigInt-New)
- [Scoping](#Scoping)
- [`let`, `const`, and `var`](#let-const-and-var)
  - [Immutability (sort of)](#Immutability-sort-of)
- [Hoisting](#Hoisting)
- [Operations](#Operations)
- [Program Structure](#Program-Structure)
- [Functions](#Functions)
  - [Optional arguments](#Optional-arguments)
  - [Default arguments](#Default-arguments)
  - [`arguments` keyword and rest parameters](#arguments-keyword-and-rest-parameters)
  - [`this` keyword](#this-keyword)
  - [Arrow functions](#Arrow-functions)
  - [Closures](#Closures)
  - [Higher-order](#Higher-order)
  - [Callbacks](#Callbacks)
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
  - [Exercise](#Exercise)
- [Bugs and Error Handling](#Bugs-and-Error-Handling)
  - [Debugging](#Debugging)
  - [Error Handling](#Error-Handling)
- [ES6 Goodies (Mixed Bag)](#ES6-Goodies-Mixed-Bag)
  - [Variable Identifiers](#Variable-Identifiers)
  - [Spread / Rest Operator](#Spread--Rest-Operator)
  - [Arrow Functions](#Arrow-Functions)
  - [Destructuring](#Destructuring)
- [Modules](#Modules)
- [Asynchronous Programming](#Asynchronous-Programming)
  - [Callbacks](#Callbacks-1)
  - [Promises](#Promises)
  - [Async/Await](#AsyncAwait)
- [Jest](#Jest)
  - [Unit](#Unit)
  - [Integration](#Integration)
  - [End-to-end (E2E)](#End-to-end-E2E)
- [Project](#Project)
- [Resources](#Resources)
  - [JavaScript Basics](#JavaScript-Basics)
  - [Functions](#Functions-1)
  - [OOP](#OOP)

## [The Birth and Death of JavaScript](https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript) (video)

> This science fiction / comedy / absurdist / completely serious talk traces the history of JavaScript, and programming in general, from 1995 until 2035. It's not pro- or anti-JavaScript; the language's flaws are discussed frankly, but its ultimate impact on the industry is tremendously positive.

## Grammar and Good Practices

## Types

I sorted these into types that I use frequently. I figured it be useful to study things that might appear more often.

### String

### Boolean

- Properties:
  - true of false

<!-- TODO: Where should we put Truthy and Falsey? -->

### Number

- Properties:
  - 64-bit value
  - Integer or float
  - Positive or negative
  - Special `Number` key words:
    - `Infinity`
    - `-Infinity`
    - `NaN`
- Math Details:
  - Order of operations (PEMDAS) still applies
  - All operations on numbers result in floating-point arithmetic.
    - `/`: Standard division does not truncate decimal values; it maintains floating point precision.
    - `%`: Modulus operator still takes the remainder.
    - Since floating-point rules apply, be careful of high-precision results; you could lose precision.

### null

### undefined

### Object

### Symbol

### BigInt (New)

## Scoping

_Scope_ refers to the part of a program where a variable is visible or available.

For variables defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want.
These are called _global_.

But variables created for function parameters or declared inside a function can be referenced only in that function, so they are known as _local_ variables.
This provides some isolation between functions—each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what’s going on in the global environment.

## `let`, `const`, and `var`

In JavaScript we have three words to declare variables: `let`, `const`, and `var`.

In the pre-ES6 days (before 2015), `var` was the only way to declare variables in JS.
The scope of a variable declared with `var` is its _current execution context_, which is either the enclosing function or, for variables declared outside any function, global.
This means variables defined with `var` are **not** block scoped.

Variables declared with `let` and `const`, however, are in fact local to the block that they are declared in. If you create one of those inside of a loop, the code before and after the loop cannot “see” it.

This brings us to a classic problem

```js
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```

What do you think this will output?
How can we fix it to output "correctly"?

### Immutability (sort of)

The difference between `let` and `const` is that a variable declared with `let` (and `var`) can be reassigned whereas a `const` cannot (hence the term **const**ant).

```js
let myLetStr = "First it's this";
myLetStr = "Now it's this"; // ✅

const myConstStr = "Hello";
myConstStr = "Goodbye"; // ❌ TypeError: Assignment to constant variable
```

Note that variables defined with `const` are not technically immutable.
We can actually mutate the data as long as we don't reassign the variable.

```js
const dogs = ["golden retriever", "dalmatian"];
dogs.push("chihuahua"); // ✅
dogs = ["husky"]; // ❌ TypeError: Assignment to constant variable
```

We should prefer to use `const` wherever possible in order to reduce confusion with reassignment.
If our program ever tries to reassign something unexpectedly, we will get an error.

## Hoisting

_Hoisting_ can be thought of as automatically bringing variable declarations to the top of their respective blocks so that variables can be used before they are declared.

The actual definition is a bit more complex:

> Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.
>
> — [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

Only `var` and `function` declarations are hoisted.
One of the advantages of this is that it allows you to use a function before you declare it in your code.

```js
catName("Chloe"); // ✅

function catName(name) {
  console.log("My cat's name is " + name);
}
```

We can also do this with `var` declarations:

```js
myCat = "Chloe";
console.log(myCat); // ✅
var myCat;
```

For all intents and purposes the interpreter sees

```js
var myCat;
myCat = "Chloe";
console.log(myCat); // ✅
```

Notice that I still had to define (assign) the variable before using it.
_Declarations_ will be hoisted, _definitions_ will not.

Accessing an undeclared `var` variable will yield `undefined`.

```js
console.log(myCat); // ✅ but will print "undefined"
var myCat;
```

🙄 You're probably starting to notice how confusing this all is.

Personally, I am fine with hoisted function declarations.
It allows us to write functional code without having to worry about order.
We can organize our code in a way that makes sense for us.

However, I think it is a bit wack that variables can be used before they are declared.
This is one of the reasons `let` and `const` were added to the spec in ES6.

Notice:

```js
myCat = "Chloe"; // ❌ ReferenceError: myCat is not defined
console.log(myCat);
let myCat;
```

This code errors on the first line with `ReferenceError: myCat is not defined`.
I think this is much more expected behavior.
We get an actual error when a variable is accessed in an unexpected location.

An error, rather than silently evaluating to `undefined`, is much more helpful for debugging.

These are a few of the reasons JavaScript developers should prefer `let`/`const` over `var`.

## Operations

## Program Structure

## Functions

There are a few ways to create functions in JavaScript.

```js
// or you can use let or var
const power = function(num, exp) {
  return num ** exp;
};
```

```js
function power(num, exp) {
  return num ** exp;
}
```

In JavaScript, functions are _first-class citizens_.
This means a function can be treated like any variable:
you can use it in arbitrary expressions, not just call it.
It is possible to store a function value in a new variable, pass it as an argument to a function, and so on.
Similarly, a variable that holds a function is still just a regular variable and can, if not constant, be assigned a new value, like so:

```js
let launchMissiles = function() {
  missileSystem.launch("now");
};

if (safeMode) {
  launchMissiles = function() {
    /* do nothing */
  };
}
```

Notice how I can refer to the function without parenthesis in order to use it just like a variable.
Referencing a function name with parenthesis will execute that function and return its evaluated result.

Referencing a function name _without_ parenthesis allows us to use the function like any other variable.
We can even pass it into other functions like so

```js
function wrapper(callback) {
  callback(); // Execute the function passed in
}

function celebrate() {
  console.log("🎉");
}

wrapper(celebrate);
// → 🎉
```

I can also pass an anonymous function in as my callback:

```js
function wrapper(callback) {
  callback(); // Execute the function passed in
}

wrapper(function() {
  console.log(`Woooo!`);
});
// → Woooo!
```

This seems silly now, but this will be very useful when we talk more about callbacks—a very important part of JS.

### Optional arguments

The following code is allowed and executes without any problem:

```js
function square(x) {
  return x * x;
}
console.log(square(4, true, "random string"));
// → 16
```

We defined `square` with only one parameter, yet when we call it with three the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.

JavaScript is extremely lax about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value `undefined`.

The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And no one will tell you about it.

The upside is that this behavior can be used to allow a function to be called with different numbers of arguments. For example, this minus function tries to imitate the `-` operator by acting on either one or two arguments:

```js
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

### Default arguments

Functions can have default arguments for parameters.
If no value is passed for that parameter, the default will be used instead of `undefined`.

To specify a default argument add a `=` after a function parameter followed by the default value.

For example, this version of `power` makes its second argument optional.
If you don’t provide it or pass the value `undefined`, it will default to `2`, and the function will behave like `square`.

```js
function power(base, exponent = 2) {
  return base ** exponent;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

### `arguments` keyword and rest parameters

Functions expose a number of useful objects by default.
These are basically objects that every function (with the exception of _arrow functions_) automatically creates at runtime.

One of these useful objects is `arguments`

> `arguments` is an `Array`-like object accessible inside functions that contains the values of the arguments passed to that function.
>
> — [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

This is essentially another way to access function arguments.
It is especially useful if you have a function that can accept any number of arguments.

For example:

```js
function showMyFriends() {
  if (arguments.length > 0) {
    console.log(`I have so many friends!`);
    console.log(`My best friend is ${arguments[0]}`); // access like any array
  } else {
    console.log(`I have no friends 😞`);
  }
}

showMyFriends("Kevin", "Miles");
// → I have so many friends!
// → My best friend is Kevin
```

This is pretty nifty! But since we're modern developers who use modern JavaScript, we should prefer ES6's fancy new _rest parameters_.

The rest parameter syntax accomplishes the same thing as the `arguments` array, but it achieves it in a much more readable and reliant way.
This syntax allows us to represent an indefinite amount of arguments as a single parameter.

A function's last parameter can be prefixed with `...` which will cause all remaining supplied arguments to be placed within a standard JavaScript `Array`. Only the last parameter can be a rest parameter.

```js
function showMeAndMyFriends(me, ...friends) {
  console.log(`Hi, my name is ${me}`);
  if (friends.length > 0) {
    console.log(`I have so many friends!`);
    console.log(`My best friend is ${friends[0]}`); // access like any array
  } else {
    console.log(`I have no friends 😞`);
  }
}

showMeAndMyFriends("Andrew", "Kevin", "Miles");
// → I have so many friends!
// → My best friend is Kevin
```

As the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters#Difference_between_rest_parameters_and_the_arguments_object) highlight, there are three main differences between rest parameters and the `arguments` object:

- rest parameters are only the arguments that haven't been given a separate name (i.e. formally defined in the function expression), while the `arguments` object contains all arguments passed to the function. **This improves code clarity and reduces boilerplate code**.
- the `arguments` object is not a real array, while rest parameters are `Array` instances, meaning methods like `sort`, `map`, `forEach` or `pop` can be applied on it directly.
- the `arguments` object has additional functionality specific to itself (like the `callee` property).

There are still reasons to use the `arguments` object (as the last point mentions), but these are advanced features that you probably won't ever need. Stick to rest parameters as often as you can.

### `this` keyword

Another important binding is `this`.
It refers to the the object which is _currently executing the function_.

If the function is a method of an object, `this` will refer to that object.

```js
const dog = {
  name: "Spots",
  whoAmI() {
    console.log(this);
  }
};

dog.whoAmI();
// → { name: 'Spots', whoAmI: [Function: whoAmI] }
```

If the function is a plain ol' function, `this` will either refer to the `window` object (in the browser) or the `global` object (in Node).

```js
function whereAmI() {
  console.log(this);
}

whereAmI();
// → Object [global]
```

**Woah, hold up. `window` object? `global` object?**
These are basically the highest level objects that store/call global variables and functions.
Think of it as the object that contains all the data about the environment.
This is where functions that are always available live (such as `setTimeout`).

In the browser, this is an object called `window` which represents the current web page.
Since Node processes don't have a window or page, they call their global object, well, `global`.

You can read more about the `window` object on the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Window), and you can read more about the `global` object on the [Node.js docs](https://nodejs.org/api/globals.html#globals_global).

### Arrow functions

ES6 introduced a new notation for functions called _arrow functions_.

```js
const power = (num, exp) => {
  return num ** exp;
};
```

We put the argument parameters between parenthesis follow by the arrow (`=>`).
These functions are called in the exact same way as normal functions.

```js
power(2, 3);
```

Arrow functions are treated pretty much just like regular functions.
They were primarily introduced as syntactical sugar to make code less verbose.
We will most often see the arrow syntax used for anonymous callback functions, which we will discuss in a minute.

There are a few syntactical improvements you can make to arrow functions if you want to trim down code.

1. If there is only one argument, you can omit the parenthesis

```js
const square = num => {
  return num * num;
};
```

2. If the function body is only one line, you can omit the curly braces. Whatever is evaluated on that one line is also what will be returned from the function.

```js
const square = num => num * num;
```

When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.

```js
const horn = () => {
  console.log(`Toot`);
};
```

Arrow functions have a few key differences from classic functions. Most importantly, arrow functions do not create their own bindings to the `this` or `arguments` keywords.

The fact that we don't have access to `arguments` is no problem because we have our handy _rest parameters_ (just be sure to wrap it in parenthesis):

```js
const concatenate = (...words) => words.join(``);
console.log(concatenate(`race`, `car`));
```

On the other hand, the absence of a bound `this` in arrow functions solves some pre-ES6 problems.

Paraphrasing from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_separate_this):
until arrow functions, every new function defined its own this value based on how the function was called.
This proved to be less than ideal with an object-oriented style of programming.

For example, take this `person` object that ages every second.

```js
const person = {
  age: 0,
  growUp() {
    setInterval(function() {
      console.log(`I am ${this.age} years old`);
      this.age++;
    }, 1000);
  }
};

person.growUp();
// → I am undefined years old
// → I am NaN years old
```

wtf? What's happening here?

Let's take a look at what `this` is in our `setInterval`:

```js
const person = {
  age: 0,
  growUp() {
    setInterval(function() {
      console.log(this);
      // console.log(`I am ${this.age} years old`);
      // this.age++;
    }, 1000);
  }
};

person.growUp();
// → Timeout
```

Looks like `this` refers to the `Timeout` object, which is the class Node uses to process certain time-based functions (you can read more [here](https://nodejs.org/api/timers.html#timers_class_timeout)).

See the problem with `this` binding in functions?
We expect `this` to refer to the actual object we are in, but once we have a callback things get dicey.
`person` is _not_ actually the object executing the callback function, so `this` does not refer to it.

In the pre-2015 era, there were a few messy ways to deal with this.
[Binding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) was probably the most popular approach, and might see some of this still around in the React community.
However, all of that is completely unnecessary now that we have _arrow functions_.

Arrow functions do not have their own `this`.
When you refer to `this` inside of an arrow function, the _enclosing lexical scope_ is used.
That fancy lingo essentially means go one pair of brackets out and see what `this` refers to there.
Usually it will be the object you want.

So, we can solve our age problem with arrow functions:

```js
const person = {
  age: 0,
  growUp() {
    setInterval(() => {
      console.log(`I am ${this.age} years old`);
      this.age++;
    }, 1000);
  }
};

person.growUp();
// → I am 0 years old
// → I am 1 years old
// etc
```

### Closures

Closures are a functional solution to object-oriented problems.
Let's look at a use case to understand.

Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

You could use a global variable along with a function for incrementing the counter:

```js
// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

add();
add();
add();

console.log(counter);
// → 3
```

There is a problem with the solution above: Any code on the page can change the counter without calling `add`.

The counter should be local to the `add` function. In OO terms, this would be _encapsulation_.

### Higher-order

### Callbacks

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
obj4 = new MyConstructor("bob");
```

Teaching Instructions:

- Start attaching things to the object and showing how JavaScript is a dynamic language.
- Show that variables and functions being values in a property.

### The Secret Life of Objects

TODO: Figure out what this is...

### Basics: Prototypes

How do we know what an object should do? How are we supposed to interact with these various things that are floating around our program?

Traditionally,

When you make a string:

```js
const str = "hello";
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

const dog = new Pet("Max");
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

const myDog = new Dog("Mike");
myDog.doTrick("jump");

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

### Exercise

- [Stopwatch](https://youtu.be/PFmuCDHHpwk?t=3489)

## Bugs and Error Handling

### Debugging

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

## ES6 Goodies (Mixed Bag)

### Variable Identifiers

#### Let

#### Const

#### Var

### Spread / Rest Operator

### Arrow Functions

Covered in detail under the [Functions Section]()

### Destructuring

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

### JavaScript Basics

- [EloquentJS - Values](https://eloquentjavascript.net/01_values.html)
- [MDN - Grammar and Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types)
- [MDN - Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [`var` vs `let` vs `const` in JavaScript](https://tylermcginnis.com/var-let-const/)
- [`this` keyword](https://www.youtube.com/watch?v=gvicrj31JOM) (video)

### Functions

- [JavaScript closures](https://www.w3schools.com/js/js_function_closures.asp)

### OOP

- [Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [Prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Classes](https://www.javascriptjanuary.com/blog/es6-classes)
- [Pillars of OOP](https://www.quora.com/What-are-the-4-pillars-of-OOPs)
- [ES6 Classes](https://www.javascriptjanuary.com/blog/es6-classes)
