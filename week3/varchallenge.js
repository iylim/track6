/* eslint-disable no-var */

for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

function callback() {
  console.log(i);
}
