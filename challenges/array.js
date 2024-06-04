function hasSubarrayWithSum(arr, target) {
  let start = 0; 
  let currentSum = 0;

  
  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    if (currentSum > target) {
      currentSum -= arr[start];
      start += 1; 

    
      if (currentSum > target) {
        currentSum -= arr[start];
        start += 1;
      }
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// using example

const array= [2,3,5,8];
const target1 = 5;
console.log(hasSubarrayWithSum(array, target1)); // Output: true




