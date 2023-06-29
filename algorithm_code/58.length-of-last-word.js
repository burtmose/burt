/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    return s.trim().split(" ").pop().length;
};
// @lc code=end

// console.log("--", lengthOfLastWord('day    '));

// for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== ' ') {
//         if (i == 0) {
//             return 1;
//         }
//         let l = 1;
//         while (s[i - l] != ' ' && i >= l) {
//             l++;
//         }
//         return l;
//     }
// }

// 58/58 cases passed (58 ms)
// Your runtime beats 57.98 % of javascript submissions
// Your memory usage beats 65.39 % of javascript submissions (41.8 MB)

// return s.trim().split(" ").pop().length;

// 58/58 cases passed (50 ms)
// Your runtime beats 91.27 % of javascript submissions
// Your memory usage beats 55.13 % of javascript submissions (42 MB)