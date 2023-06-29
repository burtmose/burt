/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 1) {
        return strs[0]
    }
    let cp = strs[0]
    let p = false
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < cp.length; j++) {
            if (cp[j] == strs[i][j]) {
                p = true
                continue
            } else {
                cp = cp.substring(0, j)
                break
            }
        }
    }
    return p ? cp : ""
};
// @lc code=end

// console.log("---", longestCommonPrefix(["dog","racecar","car"]));

// if(strs.length == 1){
//     return strs[0]
// }
// let cp = strs[0]
// let p = false
// for (let i = 1; i < strs.length; i++) {
//     for (let j = 0; j < cp.length; j++) {
//         if (cp[j] == strs[i][j]) {
//             p = true
//             continue
//         } else {
//             cp = cp.substring(0, j)
//             break
//         }
//     }
// }
// return p ? cp : ""

// 124/124 cases passed (70 ms)
// Your runtime beats 24.99 % of javascript submissions
// Your memory usage beats 57.77 % of javascript submissions (42.4 MB)

// if (strs.length === 0) {
//     return '';
// }
// if (strs.length == 1) {
//     return strs[0]
// }
// let cp = strs[0]
// for (let i = 1; i < strs.length; i++) {
//     for (let j = 0; j < cp.length; j++) {
//         if (cp[j] == strs[i][j]) {
//             continue
//         } else {
//             if (j == 0) {
//                 return ""
//             }
//             cp = cp.substring(0, j)
//             break
//         }
//     }
// }
// return cp

// 124/124 cases passed (65 ms)
// Your runtime beats 45.5 % of javascript submissions
// Your memory usage beats 30.83 % of javascript submissions (42.9 MB)