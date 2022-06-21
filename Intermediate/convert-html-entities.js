// Convert the characters in a string to their corresponding HTML entities
function convertHTML(str) {
  
  // Create a dictionary for characters and their HTML entity
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  // Replace any character in our string with their HTML entity using our entities dictionary, and return
  return str.replace(/[&<>"']/g, e => entities[e]);

}
