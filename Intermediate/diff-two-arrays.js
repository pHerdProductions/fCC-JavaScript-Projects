// Returns an array of all elements that only have one instance between both arrays
function diffArray(arr1, arr2) {
  
  // Create a new array that is all of the elements from both arrays
  const newArr = arr1.concat(arr2);
  
  // Filter out any element that is not in arr1 or not in arr2, and return
  return newArr.filter(v => !arr1.includes(v) || !arr2.includes(v));
  
}
