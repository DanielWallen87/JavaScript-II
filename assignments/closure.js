// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const first = "Dog";

function combine() {
  const second = "gone";
  console.log(`I'm sick of these ${first}${second} whipersnappers`);
}

combine();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

  // Return a function that when invoked increments and returns a counter variable.

  const counter = () => {
    let count = 0;
    return function() {
      count +=1;
      return count;
    }
  }

  const newCounter = counter();
  console.log(newCounter());
  console.log(newCounter());
  console.log(newCounter());

  // Don't think that's right as it says the variable is undefined (???), but I'm mentally exhausted and it's all I've got
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// I couldn't get the first stretch to work, so I'm not even gonna try this one lol.

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
