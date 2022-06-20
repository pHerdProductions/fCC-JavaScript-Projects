// Checks if a string is a palindrome, only letters and numbers after removing everything else. Not case-sensitive
function palindrome(str) {

  // Declare RegExp
  let regex = (/[^a-zA-Z0-9]/g);

  // Remove everything but letters and numbers, and lowercase all the letters
  let s = str.replace(regex, "").toLowerCase();

  // Declare variables for left and right indices
  let left = 0;
  let right = s.length - 1;

  // Loop until our indices meet (inclusive)
  while (left <= right){

    // If the characters don't match, we can return false
    if (s[left] != s[right]){
      return false;
    }

    // Move left and right inwards
    left++;
    right--;
  }

  // If we made it here that means no characters didn't match so we can return true
  return true;
  
}
