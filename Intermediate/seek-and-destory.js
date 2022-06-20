// Return an array after removing any number of elements passed as arguments into the function
function destroyer(arr) {
  
  // Copy our array to remove from, and create an array of all the elements passed in as args
  const newArr = [...arr];
  const argVals = [...arguments].splice(1); // The first argument is our array to destroy from so don't include that

  // Remove any element that is in our argument value array, and return
  return newArr.filter(v => !argVals.includes(v));
  
}
