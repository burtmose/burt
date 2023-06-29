/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};
// @lc code=end

// console.log("--", plusOne([9]));

// let p = 1
// for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] + p <= 9) {
//         digits[i] += p;
//         return digits;
//     } else {
//         let r = digits[i] + p;
//         digits[i] = r % 10;
//         p = Math.floor(r / 10);
//     }
// }
// digits.splice(0, 0, p);
// return digits;

// 111/111 cases passed (67 ms)
// Your runtime beats 15.08 % of javascript submissions
// Your memory usage beats 53.09 % of javascript submissions (41.9 MB)

// for (var i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;
//     if (digits[i] > 9) {
//         digits[i] = 0;
//     } else {
//         return digits;
//     }
// }
// digits.unshift(1);
// return digits;

// 111/111 cases passed (53 ms)
// Your runtime beats 84.4 % of javascript submissions
// Your memory usage beats 5.36 % of javascript submissions (42.5 MB)