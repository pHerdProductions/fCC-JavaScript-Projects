// Check if the string is a valid US phone number
function telephoneCheck(str) {
  
  // This is an array of all the possible RegExp that would validate a US phone number. I could comment an example on each...but I'm currently lazy 
  let regexArr = [
                  /^\d{3}-\d{3}-\d{4}$/,              // '555-555-5555'
                  /^[(]\d{3}[)]\d{3}-\d{4}$/,         // '(555)555-5555'
                  /^[(]\d{3}[)]\s\d{3}-\d{4}$/,       // '(555) 555-5555'
                  /^\d{3}\s\d{3}\s\d{4}$/,            // '555 555 5555'
                  /^\d{10}$/,                         // '5555555555'
                  /^\d\s\d{3}\s\d{3}\s\d{4}$/,        // '1 555 555 5555'
                  /^[1]\s\d{3}-\d{3}-\d{4}$/,         // '1 555-555-5555'
                  /^[1][(]\d{3}[)]\d{3}-\d{4}$/,      // '1(555)555-5555'
                  /^[1]\s[(]\d{3}[)]\s\d{3}-\d{4}$/   // '1 (555) 555-5555'
  ];

  // Return true if any of the regular expressions in regexArr test true for the phone number (str), otherwise return false
  return regexArr.some(regex => regex.test(str));
  
}
