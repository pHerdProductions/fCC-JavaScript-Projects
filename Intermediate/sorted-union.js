// Takes two or more arrays and returns a new array of all the unique elements, in appearing order
function uniteUnique(...arr) {
  
  // Create a dictionary(Object) for quicker checking
  const unique = {};
  
  // Create a new array that we will push unique elements to and return at the end
  let retArr = [];

  // Loop through every array given
  for (let i = 0; i < arr.length; i++){
    
    // Declare a variable for the current array to work with
    let curArr = arr[i];
    
    // Loop through every element in the current array
    for (let j = 0; j < curArr.length; j++){
      
      // If the element in the current array is not in our unique
      if(!unique.hasOwnProperty(curArr[j])){
        
        // Add the current element to the unique Object
        unique[curArr[j]] = 0;
        // Push the element to our return array
        retArr.push(curArr[j]);
      }
      
    }
  }
  // Return our array of unique elements!
  return retArr;
  
}
