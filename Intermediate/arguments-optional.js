// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum
function addTogether() {
  
  // Put all of the passed in arguments into an array
  const args = [...arguments];
  
  // Loop for each element in args
  for (let i in args){
    
    // If the type of any element is not a number, return undefined
    if (typeof args[i] != 'number') return undefined;
  }

  // If only one parameter was passed in
  if (args.length == 1){
    
    // Return a function which can be put in a variable and called later with another single number as a parameter
     return x => typeof x == 'number' ? x + args[0] : undefined; // Don't forget to make sure the element passed in is a number
  }
  
  // If the amount of parameters is more than one
  else{
    
    // Use the reduce() function on our args array, which will add all the parameters together and return the sum
    return args.reduce((x, y) => x + y, 0);
  }

}
