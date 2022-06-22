// Returns a single level array of all the elements in an array containing multiple levels
function steamrollArray(arr, flattened = []) { // flattened will be our current flattened array, this will help with recursion
  
  // For each element in the array passed in
  arr.forEach(ele => {
    
    // If the element is an array, call this function passing in the element and the current flattened array for recursion
    if (Array.isArray(ele)) steamrollArray(ele, flattened);
    
    //If it's not an array, we can push the element into the flattened array
    else flattened.push(ele);
  });
  
  // Self explanatory, return the current flattened (if in recursion), or this is the end of the line and we're done
  return flattened;
}
