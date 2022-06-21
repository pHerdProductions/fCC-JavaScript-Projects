// Each DNA is without it's pair (A pairs with T, G pairs with C, and vice versa), this returns an array of pairs [x, y]
function pairElement(str) {
  
  // Create a DNA object with each possible pair
  const DNA = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  };

  // Create an array of single DNA pieces using RegExp
  let arr = str.match(/[ATCG]/g);
  
  // Map each single DNA piece with it's counterpart using our DNA Object as an Array, and return
  return arr.map(pair => [pair, DNA[pair]]);

}
