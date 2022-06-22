// Iterate through each element in the array, testing them with the function passed. If it doesn't pass the function test (returns false):
// remove that element from the array. Once an element passes (returns true), return an array with the rest of the element (incuding that one)
function dropElements(arr, func) {
  
  // Create a copy of the array passed in
  const newArr = [...arr];
  
  // Loop over the elements in the array
  for (let i in arr){
    
    // If the function returns true with the current element, we can break out of the loop
    if (func(arr[i])){
      break;
    }
    
    // If it returns false, remove the element from the newArr array
    else{
      newArr.shift(); // shift() removes the first element in the array, which will be the element we're currently testing
    }
  }

  // We went through all the elements or found an element that passed the function and broke out of the loop. Return the new array
  return newArr;
}
