console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(`Test should say "Hello, Stacy!" : ${helloName('Stacy')}`);

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}

console.log(`Test should say "16" : ${addNumbers(12, 4)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNum, secondNum, thirdNum ){
  let sum = firstNum * secondNum * thirdNum;
  return sum;
}
console.log(`Test should say "0"  : ${multiplyThree(0, 10, 3)}`);

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  let lastItem;
  if (array.length > 0) {
    lastItem = array.pop();
    return lastItem;
  }
  else {
    return `undefined`;
  }
}

console.log(`Test should say "l" : ${getLast(['j', 'k', 'l'])}`);

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  let isValue = 0;

  for (let i = 0; i < array.length; i++) {
    if (value == array[i]){
      isValue++;
    } // end if statement
  } // end for loop

  if (isValue > 0){
    return true;
  } // end if statement
  else {
    return false;
  } // end else statement
} // end function find

console.log(`Test should say true : ${find(5, [2, 4, 5, 0])}`);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let isLetter = '';

  isLetter = string.charAt(0);
  if (isLetter === letter) {
    return true;
  }
  else {
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(numArray) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < numArray.length; i++) {
    sum += numArray[i]
  } // end for loop
  return sum;
}

console.log(`Test should say "10" : ${sumAll([2, 3, 5])}`);

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(myArray) {
  let newArray = [];

  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > 0) {
      newArray.push(myArray[i]);
    } // end if statement
  } // end for loop
  return newArray;
}

console.log('Test should say "[2, 5, 3]":', allPositive([2, ,0, -3, 5, -6, 3]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
// --------- Find the Smallest and Biggest Numbers ---------
// Create a function that takes an array of numbers and returns
// both the minimum and maximum numbers, in that order.
// Example: minMax([1, 2, 3, 4, 5]) -> [1, 5]

function minMax(minMaxArray) {
  let theArray = [];
  let min = minMaxArray[0];
  let max = minMaxArray[0];

  for (let i = 0; i < minMaxArray.length; i++) {
    if (max < minMaxArray[i]) {
      max = minMaxArray[i];
    } // end if statement

    if (min > minMaxArray[i]) {
      min = minMaxArray[i];
    } // end if statement
  } // end for loop

  theArray.push(min);
  theArray.push(max);

  return theArray;
}

console.log('Test should say "[1, 5]":', minMax([1, 2, 3, 4, 5]));
