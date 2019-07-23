// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
});

function lastItem(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

lastItem(items, function(last) {
  console.log(last);
});

// Creating calculator to use for the next two math related problems

function calculator(firstNum, secondNum, operator) {
  return operator(firstNum, secondNum);
}

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return x + y;
}

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return x * y;
}

console.log(calculator(1, 2, sumNums));
console.log(calculator(3, 5, multiplyNums));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  if (list.includes(item)) return true;
  else return false;
}

console.log(calculator("Gum", items, contains));
console.log(calculator("Dog", items, contains));

/* STRETCH PROBLEM */

let duplicateArr = [1, 1, 2, 2, 3, 3];
let duplicates;

let removeDuplicates = function(array, cb) {
  let conversion = function() {
    let uniqueConvert = new Set(duplicateArr);
    let uniqueArray = [...uniqueConvert];
    return uniqueArray;
  }
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

console.log(removeDuplicates());

//Stumped on the above problem, may try again later if time allows