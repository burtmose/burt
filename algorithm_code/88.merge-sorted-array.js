/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let s = (a, b) => {
        return a - b;
    }
    for (let i = m, j = 0; i < nums1.length; i++, j++) {
        nums1[i] = nums2[j];
    }
    return nums1.sort(s);
};
// @lc code=end

// console.log("--", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log("--", merge([0], 0, [1], 1));
// let a1 = [-10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5, -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// let a2 = [-10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7, -7, -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9]
// console.log("--", merge(a1, 55, a2, 99));
// console.log("--", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

// let s = (a, b) => {
//     return a - b;
// }
// if (m == 0) {
//     return nums1.splice(0, n, ...nums2).sort(s);
// }
// if (n == 0) {
//     return nums1.sort(s);
// }
// nums1.splice(m, n, ...nums2)
// return nums1.sort(s);

// 59/59 cases passed (53 ms)
// Your runtime beats 86.09 % of javascript submissions
// Your memory usage beats 10.66 % of javascript submissions (42.6 MB)

// let s = (a, b) => {
//     return a - b;
// }
// for (let i = m, j = 0; i < nums1.length; i++, j++) {
//     nums1[i] = nums2[j];
// }
// return nums1.sort(s);

// 59/59 cases passed (55 ms)
// Your runtime beats 80.82 % of javascript submissions
// Your memory usage beats 13.64 % of javascript submissions (42.6 MB)