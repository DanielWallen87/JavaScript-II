// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

const first = "Dog"; // lexical scope, where closure occurs

function combine() {
  const second = "gone";
  console.log(`I'm sick of these ${first}${second} whipersnappers`);
}

combine();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

  // Return a function that when invoked increments and returns a counter variable.

  const counter = () => { // creates global function
    let count = 0;
    return function() { // creates local anonymous function
      count +=1;
      return count; // returns modified count value
    }
  }

  const newCounter = counter(); // creates new global function that calls return value of terminated anonymous function
  console.log(newCounter()); // increments the value despite ""
  console.log(newCounter());
  console.log(newCounter());

  // Repetition with a one line arrow function

  const simpleCounter = () => {
    let simpleCount = 0;
    return () => {simpleCount++; console.log(simpleCount);};
  }

  const newSimpleCounter = simpleCounter();
  newSimpleCounter();
  newSimpleCounter();
  newSimpleCounter();

  // Don't think that's right as it says the variable is undefined (???), but I'm mentally exhausted and it's all I've got
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// I couldn't get the first stretch to work, so I'm not even gonna try this one lol.

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => { // Creates global function

  return { // Return statement (only returns the function that's called)
    increment: () => {
      let count = 0;
      return () => console.log(count++); // Anonymous callback function that logs updated count to console
    },
    decrement: () => {
      let count = 0;
      return () => console.log(count--);
    }
  }
}

const incrementer = counterFactory().increment(); // must attach both the CF var and object to access data
const decrementer = counterFactory().decrement(); // accessing said data is more difficult without attaching to var

incrementer();
incrementer();
incrementer();
               // console.log is already attached to the function object so there's no need for it in parenthesis
decrementer();
decrementer();
decrementer();

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
