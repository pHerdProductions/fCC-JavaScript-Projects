// Make a Person (Object) with some getters and setters
const Person = function(firstAndLast) {
  
  // Some variables for storing the first and last name. The first variable is an array where we seperate the first and last names
  let name = firstAndLast.split(" ");
  let firstName = name[0];
  let lastName = name[1];
  
  // All of our get methods, simple functions bound to the Person (Object)
  this.getFirstName = () => firstName;
  this.getLastName = () => lastName;
  this.getFullName = () => firstName + " " + lastName;
  
  // All of our SET methods, more simple functions to put new names into our private variables
  this.setFirstName = (first) => firstName = first;
  this.setLastName = (last) => lastName = last;
  this.setFullName = (firstAndLast) => {
    let newName = firstAndLast.split(" ");
    firstName = newName[0];
    lastName = newName[1];
  }
  
};

// Example of creating a Person with the name Bob Ross
const bob = new Person('Bob Ross');
