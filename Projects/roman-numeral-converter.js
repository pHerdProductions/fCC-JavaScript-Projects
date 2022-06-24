// Convert a number to a string of it's Roman Numeral representation
function convertToRoman(num) {
  
  // Create a dictionary (Object) of all the possible Roman Numeral types and their number values
  const romans = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  
  // Declare our string we will add to and return eventually
  let roman = "";

  // Loop through the romans dictionary
  for (let key in romans){
    
    // Declare temp which will be how many times a value can go into the remaining number, rounding down to a whole number
    let temp = Math.floor(num / romans[key]);
    
    // Subtract from the total remaining (num) the amount we'll be adding to our string in Roman Numerals
    num -= temp * romans[key];
    
    // However many times that specific Roman Numeral type can go into the remaining number, add it's representation to our string
    for (let i = 0; i < temp; i++) roman += key;
  }

  // Success!
  return roman;
}
