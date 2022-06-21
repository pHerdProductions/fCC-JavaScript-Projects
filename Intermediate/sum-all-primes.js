// Let's first create a function to check if a number is prime
function isPrime(num){
  
  // If the number is less than 2 it is not a prime
  if (num < 2) return false;

  // A number can't be divisible by anything greater than it's square root
  // So we loop 2 to the square root of the number we're checking
  for(let i = 2; i <= Math.sqrt(num); i++){
    
    // If the number is divisible by any number from 2 to it's square root, it's not prime so return false
    if (num % i == 0) return false;
  }

  // If we made it this far, it is a prime number, so return true
  return true;
}

// Now the main sumPrimes function which goes through all numbers less than or equal to the passed in Int and adds all primes
function sumPrimes(num) {
  
  // Create a variable to store the sum
  let primeSum = 0;

  // If the number passed is less than 2 we can skip this and return primeSum which is 0
  if (num >= 2){
    
    // Loop, from 2 to the passed in number
    for (let n = 2; n <= num; n++){
      
      // If the number is a prime, add it to the sum
      if (isPrime(n)) primeSum += n;
    }
  }

  // Return the sum!
  return primeSum;
}
