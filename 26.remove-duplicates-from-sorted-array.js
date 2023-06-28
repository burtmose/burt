/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
// @lc code=end

// console.log("--",removeDuplicates([1,1,2]));
// console.log("--", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] == nums[i]) {
//         nums.splice(i, 1);
//         i--;
//     }
// }
// return nums.length

// 361/361 cases passed (130 ms)
// Your runtime beats 20.23 % of javascript submissions
// Your memory usage beats 29.83 % of javascript submissions (45 MB)

// let i = 0;
// for (let j = 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//         i++;
//         nums[i] = nums[j];
//     }
// }
// return i + 1;

// 361/361 cases passed (58 ms)
// Your runtime beats 97.41 % of javascript submissions
// Your memory usage beats 29.83 % of javascript submissions (44.9 MB)