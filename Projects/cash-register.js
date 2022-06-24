/*  Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
    payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
    cid is a 2D array listing available currency.
    The checkCashRegister() function should always return an object with a status key and a change key.
*/

// SPECIAL NOTE: Had to use .toFixed(2) for calculations that would give me off values in calculations (I.E. 0.0399999997 instead of 0.04)
function checkCashRegister(price, cash, originalCid) {

  // Create a copy of the originalCid we will instead use so we can keep the originalCid as is
  let cid = Array.from(originalCid).map(x => Array.from(x));
  
  // All possible currencies and their values
  const currency = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01  
  };
  
  // Using the reduce() method on the cash drawer variable (cid), create a variable for the total amount of money in it
  let totalDrawer = cid.reduce((x, y) => x + y[1], 0).toFixed(2);
  
  // Create a variable to represent the change needed for the transaction
  let diff = cash - price;

  // If the change we need to give is greater than what we have in the drawer, we can already return an INSUFFICIENT_FUNDS answer
  if (diff > totalDrawer) return ({status: "INSUFFICIENT_FUNDS", change: []});

  // This variable will represent a 2D array we will push how much of each currency we will give for change (I.E. [["ONE HUNDRED", 200]["TWENTY", 60]])
  let retChange = [];
  
  // Loop through the cash drawer starting with the end (greatest valued currency) and work backwords
  for (let c = 8; c >= 0; c--){
    
    // Create a variable (amt) to check how many of the current currency type we could fit into the current amount of change left to give (diff)
    let amt = Math.floor((diff / currency[cid[c][0]]).toFixed(2)); // Use Math.floor() since we can't give partial currency, nor more money than the change
    
    /* Using Math.min() we put the minimum of either the amount of that currency in the register, or 
       the amount of that currency we could give without giving more than the amount of change left to give */
    let specificChange = Math.min(cid[c][1], amt * currency[cid[c][0]]);
    
    // If we can give an amount of a type of currency
    if(specificChange > 0){
      
      // Push to our retChange array ["SPECIFIC_CURRENCY", TOTAL_MONEY_VALUE]
      retChange.push([cid[c][0], specificChange]);
      
      // Subtract the amount of money we just gave from the change left to give
      diff -= specificChange;
      
      // Remove the amount of money we just gave out from that specific currency in the cash register (cid)
      cid[c][1] -= specificChange;
    }
  }
  
  // If we were able to give them exact change
  if (diff.toFixed(2) == 0){
    
    // If there is no more money left in the drawer after giving exact change, we're CLOSED, and return with it the original cash register array
    if (cid.every(x => x[1] == 0)) return {status: "CLOSED", change: originalCid};
    
    // If we still have money left in the drawer after giving exact change, we're OPEN and return the retChange array
    return {status: "OPEN", change: retChange};
  }
  
  // If we couldn't give the exact change
  else{
    
    // Return INSUFFICIENT_FUNDS with an empty array for the change
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  
}
