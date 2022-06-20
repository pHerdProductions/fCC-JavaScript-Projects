// Return an array of objects from collection(an array of Obj) that contain all key:value pairs in source(an Obj)
function whatIsInAName(collection, source) {
  
  // Create an array of all our keys from the source param
  const keys = Object.keys(source);
  
  // Create an array to put our objects in, and filter
  const arr = collection.filter(obj => {
    for (let k in keys){ // For every key in keys where the key is keys[k]
      if(!obj.hasOwnProperty(keys[k]) || obj[keys[k]] !== source[keys[k]]){ // If the object doesn't have the property(key) or the key:value doesn't match
        return false; // Don't add to the array
      }
    }
    return true; // Add to the array if it made it through all the key:value pairs
  });
  
  return arr; // Could shorten and just put 'return' in place of 'const arr ='
  
}
