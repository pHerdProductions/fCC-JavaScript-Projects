// Search for a missing letter in the continuous characters str(String) and return it. If it's not missing a letter, return undefined
function fearNotLetter(str) {
  
  // Create a constant representing the unicode value of the first character
  const beg = str.charCodeAt(0);
  
  // Create a constant for the unicode of the last character
  const end = str.charCodeAt(str.length-1);
  
  // Declare the variable for our missing character. Since if there is not one we return undefined, we give it no value (making it undefined)
  let missing;
  
  // Use a for loop to go through the range of unicodes of the first character to last
  for (let i = beg; i <= end; i++){
    
    // If the unicode number of the character we're checking is NOT the current number of i (our iterator)
    if (str.charCodeAt(i - beg) != i){
      
      // We make our variable missing equal to the character that that unicode number would represet, and break the for loop
      missing = String.fromCharCode(i);
      break;
    }
  }
  
  // Return either the character that is missing or undefined if it's not missing one
  return missing;
  
}
