/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let t = []
    for (let i = 0; i < nums.length; i++) {
        let l = target - nums[i]
        let index = t.indexOf(l)
        if (index >= 0) {
            return [index, i]
        }
        t.push(nums[i])
    }
    return []
};
// @lc code=end

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] == target) {
//             return [i, j]
//         }
//     }
// }
// return []

// 57/57 cases passed (125 ms)
// Your runtime beats 32.6 % of javascript submissions
// Your memory usage beats 91.2 % of javascript submissions (42 MB)

// let t = []
// for (let i = 0; i < nums.length; i++) {
//     let l = target - nums[i]
//     let index = t.indexOf(l)
//     if (index >= 0) {
//         return [index, i]
//     }
//     t.push(nums[i])
// }
// return []

// 57/57 cases passed (119 ms)
// Your runtime beats 40.48 % of javascript submissions
// Your memory usage beats 96.68 % of javascript submissions (41.8 MB)

// let map = new Map()
// for (let i = 0; i < nums.length; i++) {
//     let l = target - nums[i]
//     if (map.has(l)) {
//         return [map.get(l), i]
//     }
//     map.set(nums[i], i)
// }
// return []

// 57/57 cases passed (61 ms)
// Your runtime beats 86.48 % of javascript submissions
// Your memory usage beats 37.64 % of javascript submissions (42.9 MB)

