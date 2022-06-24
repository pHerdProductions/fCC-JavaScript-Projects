// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function rot13(str) {
  
  // Create a function that will shift a character (char) a certain amount (shiftAmt) and return the new character
  function shiftChar(char, shiftAmt){
    
    // Create a variable to reperesent the char code of the passed in character plus the shift amount
    let code = char.charCodeAt(0) + shiftAmt;
    
    // If the code is greater than 90, we subtract 26 to go back to the beginning of the alphabet. 65 (A) - 90 (Z)
    if (code > 90) code -= 26;
    
    // Return the new character after shifting
    return String.fromCharCode(code);
  }
  
  // Create a RegExp to test if it's a valid character to shift. In this problem, only shift capital letters (A - Z)
  let regex = /[A-Z]/;
  
  // Declare an empty string we will add to and eventually return
  let retStr = "";
  
  // Loop through every character in the string (str). Test if it's a capital letter using RegExp.test()
  // If the RegExp.test() returns true, use our shiftChar function to add the new character to our retStr. If not, add the character itself
  for (let c in str) regex.test(str[c]) ? retStr += shiftChar(str[c], 13) : retStr += str[c];

  // Now we can return the shifted string
  return retStr;
}

// An example which will return "FREE CODE CAMP"
rot13("SERR PBQR PNZC");

// Could easily make it so we can add the shift amount ( function rot(str, shiftAmt) ) and use that in the shiftChar(char, shiftAmt) function
