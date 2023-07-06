/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var i = 0;
    var j = 0;
    // Create an array list to store the output result...
    var res = [];
    // For generating each row of the triangle...
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
        for (j = 0; j <= i; j++) {
            // Primary...
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res;      // Return the output list of pascal values...
};
// @lc code=end

// let result = [];
// while (numRows > 0) {
// let newarr = [1];
// let pre = result[result.length - 1];
// if (pre) {
//     for (let i = 1; i < pre.length; i++) {
//     newarr[i] = pre[i] + pre[i - 1];
//     }
//     newarr.push(1);
// }
// result.push(newarr);
// numRows--;
// }
// return result;

// 30/30 cases passed (66 ms)
// Your runtime beats 25.54 % of javascript submissions
// Your memory usage beats 74.78 % of javascript submissions (42 MB)

// var i = 0;
// var j = 0;
// // Create an array list to store the output result...
// var res = [];
// // For generating each row of the triangle...
// for (i = 0; i < numRows; i++) {
//     res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
//     for (j = 0; j <= i; j++) {
//         // Primary...
//         if (j === 0 || j === i) {
//             res[i][j] = 1;
//         }
//         else {
//             // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
//             res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
//         }
//     }
// }
// return res;      // Return the output list of pascal values...

// 30/30 cases passed (65 ms)
// Your runtime beats 31.03 % of javascript submissions
// Your memory usage beats 37.08 % of javascript submissions (42.5 MB)