function sayHello() {
  return 'Hello';
}

function executeFunc(callback) {
  return callback();
}

console.log(executeFunc(sayHello));
// I can also pass in anonymous functions
console.log(
  executeFunc(function() {
    return `I'm anonymous!`;
  })
);

// Optional arguments
/**
 *
 * @param {*} base
 * @param {number=} exponent
 */
function power(base, exponent = 2) {
  return base ** exponent;
}

function getResults() {
  return undefined;
}

console.log(power(4, getResults()));
