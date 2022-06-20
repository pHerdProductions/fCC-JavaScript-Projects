function sumAll(arr) { // Returns the total of all numbers including and between 2 integers
  let sum = 0;
  const beg = Math.min(...arr); // The smaller of the two
  const end = Math.max(...arr); // The bigger of the two
  // Iterate and add to sum
  for(let i = beg; i <= end; i++){
    sum += i;
  }
  
  return sum;
}
