function findRotatedIndex(arr, key) {
    let lo = 0; // Start of the range
    let hi = arr.length - 1; // End of the range

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);

        // If key is found, return the index
        if (arr[mid] === key) {
            return mid;
        }

        // If left half is sorted
        if (arr[lo] <= arr[mid]) {
            // If the key lies within the sorted left half
            if (key >= arr[lo] && key < arr[mid]) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        } 
        // If right half is sorted
        else {
            // If the key lies within the sorted right half
            if (key > arr[mid] && key <= arr[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }

    // Key not found
    return -1;
}

module.exports = findRotatedIndex

// findRotatedIndex
// Write a function called findRotatedIndex which accepts 
// a rotated array of sorted numbers and an integer. The function should return 
// the index of num in the array. If the value is not found, return -1.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

// function findIndexOf(str, char) {
//   let index = 0;

//   while (index < str.length) {
//     if (str[index] === char) {
//       return index;
//     }
//     index++;
//   }

//   return -1; // Character not found
// }

// const myString = "Hello, world!";
// const charToFind = "o";

// const index = findIndexOf(myString, charToFind);

// if (index !== -1) {
//   console.log(`The character '${charToFind}' is at index ${index}`);
// } else {
//   console.log(`The character '${charToFind}' was not found`);
// }