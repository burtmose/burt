/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }
    var half = 0;
    while (x > half) {
        half = half * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === half || x === Math.floor(half / 10);
};
// @lc code=end

// if (x < 0) {
//     return false;
// }
// let maxdigit = Math.floor(Math.log10(x)) + 1;
// let step = Math.floor(maxdigit / 2);
// for (let i = 0; i < step; i++) {
//     let modded = 10 ** (i + 1);
//     let divided = 10 ** i;
//     let pre = Math.floor((x % modded) / divided);

//     let i2 = maxdigit - i;
//     let modded2 = 10 ** i2;
//     let divided2 = 10 ** (i2 - 1);
//     let end = Math.floor((x % modded2) / divided2);
//     if (pre != end) {
//         return false;
//     }
// }
// return true;

// 11511/11511 cases passed (163 ms)
// Your runtime beats 87.24 % of javascript submissions
// Your memory usage beats 87.4 % of javascript submissions (50.5 MB)

