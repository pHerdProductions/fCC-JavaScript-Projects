// First create a function that will convert a binary number (String) into a decimal number (Integer)
function binToDec(numStr){
  
  // Declare variables for our multiplier (1, 2, 4, 8, 16...) and the decimal number (dec)
  let multiplier = 1;
  let dec = 0;
  
  // Loop for how many numbers there are in the binary number string, from right to left
  for (let i = numStr.length - 1; i >= 0; i--){
    
    // Add to dec, from right to left, the number (0 or 1) times the multiplier
    dec += (parseInt(numStr[i]) * multiplier);
    
    // Multiply the multiplier by 2 for the next number
    multiplier *= 2;
  }
  
  // This will be the sum of all the numbers in the string (0 or 1) times the multiplier
  return dec
}

// Our main function that will go through each binary number, convert to a character, add them to a string and return
function binaryAgent(str) {
  
  // This will be for adding each character to which we will return at the end
  let retStr = "";
  
  // Create an array of binary numbers (String) by splitting by a space between them
  let binArr = str.split(" ");

  // For each binary in the array, add the character using String.fromCharCode() with the number our function binToDec() returns
  binArr.forEach(s => retStr += String.fromCharCode(binToDec(s)));
  
  // All done
  return retStr;
}
