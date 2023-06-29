/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j++] = nums[i];
        }
    }
    return j;
};
// @lc code=end

// removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
// removeElement([3,2,2,3], 3)

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == val) {
//         nums.splice(i, 1);
//         i--;
//     }
// }

// 113/113 cases passed (66 ms)
// Your runtime beats 22.36 % of javascript submissions
// Your memory usage beats 28.25 % of javascript submissions (42.2 MB)

// let j = 0;
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//         nums[j++] = nums[i];
//     }
// }
// return j;

// 113/113 cases passed (48 ms)
// Your runtime beats 96.07 % of javascript submissions
// Your memory usage beats 28.25 % of javascript submissions (42.3 MB)