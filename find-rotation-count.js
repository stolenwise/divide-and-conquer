function findRotationCount(arr, val) {
    let left = 0
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)
    while (left <= right) {
        if (arr[left] <= arr[right]) {
            return left
        }
        if (arr[mid] < arr[mid - 1]) {
            return mid
        }
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1
        }
        if (arr[mid] < arr[right]) {
            right = mid - 1; // Narrow search to the left half
        } else if (arr[mid] > arr[left]) {
            left = mid + 1; // Narrow search to the right half
        }
    }
    return 0
}

module.exports = findRotationCount

// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.
// Constraints:
// Time Complexity: O(log N)
// Examples:
// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0