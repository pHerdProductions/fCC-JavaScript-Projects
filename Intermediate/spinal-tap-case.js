// Convert a string so each-word-is-lower-case-joined-by-a-dash
function spinalCase(str) {
  
  // Create an array, matching any word seperated by something other than or an alpha char or that starts with a Capital letter
  let arr = str.match(/[a-zA-Z][a-z]+/g).map(s => s.toLowerCase()); // Map every match to lowercase into the array
  
  // Join all the words in the array with a dash, and return
  return arr.join("-");
  
}
