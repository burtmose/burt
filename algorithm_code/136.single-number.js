/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Initialize the unique number...
  let uniqNum = 0;
  // TRaverse all elements through the loop...
  for (let i = 0; i < nums.length; i++) {
    // Concept of XOR...
    uniqNum = uniqNum ^ nums[i];
    console.log("uniqNum", uniqNum);
  }
  return uniqNum; // Return the unique number...
};
// @lc code=end

// singleNumber([2, 2, 1]);
// singleNumber([4, 1, 2, 1, 2]);
// singleNumber([1]);

// let single = [];
// for (let i = 0; i < nums.length; i++) {
//   if (single.includes(nums[i])) {
//     let index = single.indexOf(nums[i]);
//     single.splice(index, 1);
//   } else {
//     single.push(nums[i]);
//   }
// }
// return single[0];

// 61/61 cases passed (206 ms)
// Your runtime beats 16.48 % of javascript submissions
// Your memory usage beats 42.25 % of javascript submissions (45.8 MB)
