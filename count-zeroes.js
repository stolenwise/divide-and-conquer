function countZeroes(arr) {
    let lo = 0;
    let hi = arr.length - 1;
    let result = -1; // default if no zero is found

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === 0) {
            result = mid;
            hi = mid - 1; // move pointer to the left to find the first zero
        } else {
            lo = mid + 1; // move pointer to the right
        }
    }

    if (result === -1) return 0; // no zeroes found
    return arr.length - result; // count of zeroes
}

module.exports = countZeroes

// const countZeroes = require("./count-zeroes")

// describe("#countZeroes", function(){
//   it("counts the number of zeroes", function(){
//     expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2)
//     expect(countZeroes([1, 0, 0, 0, 0])).toBe(4)
//     expect(countZeroes([0, 0, 0])).toBe(3)
//     expect(countZeroes([1, 1, 1, 1])).toBe(0)
//   })
// })
