// Returns the total of all numbers including and between 2 integers
function sumAll(arr) {
  
  // Declare variables
  let sum = 0;
  const beg = Math.min(...arr); // The smaller of the two
  const end = Math.max(...arr); // The bigger of the two
  
  // Iterate and add to sum
  for(let i = beg; i <= end; i++){
    sum += i;
  }
  
  // Return our total sum
  return sum;
}
