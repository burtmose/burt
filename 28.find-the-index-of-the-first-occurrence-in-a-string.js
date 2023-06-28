/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        let b = false;
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                b = true;
                break;
            }
        }
        if (!b) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

// for (let i = 0; i < haystack.length; i++) {
//     let b = false;
//     for (let j = 0; j < needle.length; j++) {
//         if (needle[j] !== haystack[i + j]) {
//             b = true;
//             break;
//         }
//     }
//     if (!b) {
//         return i;
//     }
// }
// return -1;

// 79/79 cases passed (59 ms)
// Your runtime beats 56.42 % of javascript submissions
// Your memory usage beats 14.39 % of javascript submissions (42.5 MB)

// let n = haystack.length;
// let m = needle.length;
// if (m === 0) return 0; // empty needle
// for (let i = 0; i <= n - m; i++) {
//     let found = true;
//     for (let j = 0; j < m; j++) {
//         if (haystack[i + j] !== needle[j]) {
//             found = false;
//             break;
//         }
//     }
//     if (found) return i;
// }
// return -1; // needle not found