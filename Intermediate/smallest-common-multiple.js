// First create a function that checks if a number is divisible by all the numbers in an array
function checkBetween(arr, num){
  
  // Loop for every number in the array
  for (let i in arr){
    
    // If the num(Integer) is not divisible by this current number in the array, return false
    if (num % arr[i] != 0) return false;
  }
  
  // If we made it through all the numbers in the array, we can return true
  return true;
}

// Here is our main function which accepts an array of 2 numbers [x, y] to find the lowest common multiple of them
// that is also divisible by all the numbers between them
function smallestCommons(arr) {
  
  // Declare variables for the smallest and biggest of the two numbers in the array, and instantiate the between array for all the numbers in-between
  let small = Math.min(arr[0], arr[1]);
  let big = Math.max(arr[0], arr[1]);
  let between = [];
  
  // Starting with the smallest number (we must check if it's divisible by this too), push that and every number up to (not inclusive) the big number
  for (let i = small; i < big; i++) between.push(i);
  
  // Since we're checking multiples, we iterate by checking the big number and multiply it by 1, 2, 3..., i until we find the answer
  // Looping with true(Boolean) is a terrible practice, but for this problem it works. Could impliment a fail safe (i < 9999) to prevent an infinite loop
  for (let i = 1; true /* i < 9999 */; i++){
    
    // Once we find a number that passes our checkBetween function, return that number
    if (checkBetween(between, big*i)) return big*i;
  }

  return 0; // If we impliment the loop fail safe, and it never found a number, we could return 0 as a way to test if we found an answer or not
}
