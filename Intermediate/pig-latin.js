// Returns the pig latin version of a word(String)
function translatePigLatin(str) {
  
  // Use RegExp to test if it begins with a vowel
  if(/^[aeiou]/.test(str)){
    return str + "way"; // If so just add "way" to the end and return
  }
  
  // Else it begins with a consonant
  else{
    
    // Create a string for the beginning consonant(s)
    let begC = str.match(/[^aeiou]+/)[0];
    
    // Slice the string to remove the beginning consonant(s), add them to the end, then finally add "ay", and return
    return str.slice(begC.length) + begC + "ay";
  }
  
}
