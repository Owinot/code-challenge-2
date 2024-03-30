// Function to generate an array of numbers between two values (inclusive)
function rangeBetween(start, end) {
    // Use conditional (ternary) operator to determine the direction of filling the array
    const arr = start > end ? Array.from({ length: start - end + 1 }, (_, index) => start - index)
      : Array.from({ length: end - start + 1 }, (_, index) => start + index);
  
    // Return the generated array
    return arr;
  }
  
  // Output the result of generating an array between 12 and 15 (inclusive)
  console.log(rangeBetween(12, 15));
  
  // Output the result of generating an array between -12and 15 (inclusive)
  console.log(rangeBetween(-12, 15))