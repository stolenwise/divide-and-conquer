function sortedFrequency(arr, key) {
    let lo = 0;
    let hi = arr.length - 1;

    function firstOccurrence(arr, key) {
        let lo = 0;
        let hi = arr.length - 1;
        let result = -1; // default if key is not found

        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (arr[mid] === key) {
                result = mid;
                hi = mid - 1; // move pointer to the left
            } else if (arr[mid] < key) {
                lo = mid + 1; // Key must be to the right, move pointer to the right
            } else {
                hi = mid - 1;
            }
        }
        return result;
    }

    function lastOccurrence(arr, key) {
        let lo = 0;
        let hi = arr.length - 1;
        let result = -1; // default if key is not found

        while (lo <= hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (arr[mid] === key) {
                result = mid;
                lo = mid + 1; // move pointer to the right
            } else if (arr[mid] < key) {
                lo = mid + 1; // Key must be to the right, move pointer to the right
            } else {
                hi = mid - 1; // move pointer to the left
            }
        }
        return result;
    }

    const first = firstOccurrence(arr, key);
    if (first === -1) return -1; // key not found

    const last = lastOccurrence(arr, key);
    return last - first + 1; // frequency = last - first + 1
}
        

module.exports = sortedFrequency

```jsx

```

// ## **sortedFrequency**

// Given a sorted array and a number, write a function called 
// ***sortedFrequency*** that counts the occurrences of the number in the array

// **Constraints**:

// Time Complexity: O(log N)

// Examples:

// ```jsx
// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
```