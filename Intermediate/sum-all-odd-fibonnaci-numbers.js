// Return the sum of all odd numbers in the fibonnaci sequence less than a given number, num
function sumFibs(num) {
  
  // Declare variables for the current number, previous number, and the sum which we will return
  let cur = 1;
  let prev = 0;
  let oddSum = 0;

  // Loop while the current number is less than or equal to the passed in number
  while (cur <= num){
    
    // If the current number is odd, add it to our oddSum variable
    if (cur % 2 == 1) oddSum += cur;
    
    // Create a variable to hold the current number in, add the previous number to the current number, than make that temp var (old cur) the previous number
    let temp = cur;
    cur += prev;
    prev = temp;
    
  }
  
  // You already know what this does!
  return oddSum;
  
}
