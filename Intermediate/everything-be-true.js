// Check if the predicate (second argument) is truthy on all elements of a collection (first argument)
function truthCheck(collection, pre) {
  
  // Loop through all the elements in our collection
  for (let i in collection){
    
    // If an element's predicate value is falsey, return false
    if (!collection[i][pre]) return false;
  }
  
  // If we made it through all the elements preidates values as truthy, we can return true
  return true;
}
