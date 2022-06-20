// Replaces before(String) with after(String), keeping the first letter's case (Upper/lower) of the matched string
function myReplace(str, before, after) {
  
  // Create a RegExp to match before(String) (not case-sensitive)
  let regex = new RegExp(before, 'gi');
  
  // New string of the matched word from str
  let matchedStr = str.match(regex)[0];
  
  // If the matched string starts with an Uppercase letter
  if (matchedStr[0] == matchedStr[0].toUpperCase()){
    // Replace the matched string with after starting with an Uppercase letter
    return str.replace(matchedStr, after[0].toUpperCase() + after.slice(1));
  }
  
  // Else the matched string starts with a lowercase letter
  else{
    // Replace the matched string with after starting with a lowercase letter
    return str.replace(before, after[0].toLowerCase() + after.slice(1));
  }
  
}
