function permute(str) {
    // Helper function to swap characters in a string
    function swap(str, i, j) {
      let arr = str.split('');
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr.join('');
    }
  
    // Recursive function to generate permutations
    function generatePermutations(str, left, right) {
      if (left === right) {
        console.log(str);
      } else {
        for (let i = left; i <= right; i++) {
          str = swap(str, left, i);
          generatePermutations(str, left + 1, right);
          str = swap(str, left, i); // backtrack
        }
      }
    }
  
    generatePermutations(str, 0, str.length - 1);
  }
  
  // Example usage:
  permute("Nitish");
  