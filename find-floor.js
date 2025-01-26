function findFloor(arr, val) {

    let left = 0;
    let right = arr.length -1;
    let floor = -1;
    let mid = Math.floor((left + right) /2);

    while (left <= right) {
        if (arr[mid] === val) {
            return arr[mid]; 
        }
        if (arr[mid] < val) {
            floor = arr[mid]; // Update the floor to the current mid value
            left = mid +1; //Move right to search for a larger potential floor
        } else {
            right = mid - 1; //Move left since mid is too large
        }
    }

  return floor; // Return the floor if found, other wise -1.
}

module.exports = findFloor

// ## **findFloor**

// Write a function called ***findFloor*** which accepts a sorted array and a value x, 
// and returns the floor of x in the array. 
// The floor of x in an array is the largest element in the array which is smaller 
// than or equal to x. If the floor does not exist, return -1.

// Examples:

// ```jsx
// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// ```

// **Constraints**

// Time Complexity: O(log N)