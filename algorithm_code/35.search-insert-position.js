/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};
// @lc code=end

// console.log("---", searchInsert([1, 3, 5, 6], 5));

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//         return i;
//     }
// }
// return nums.length;

// 65/65 cases passed (65 ms)
// Your runtime beats 21.78 % of javascript submissions
// Your memory usage beats 63 % of javascript submissions (42.1 MB)
