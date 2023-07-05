/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    return root;
};
// @lc code=end

// let buildTreeNode = function (start, end) {
//   let len = end - start;
//   let node = new TreeNode();
//   let mid = start + Math.floor(len / 2);
//   if (len < 1) {
//     return;
//   }
//   node.val = nums[mid];
//   let left = buildTreeNode(start, mid);
//   if (left) {
//     node.left = left;
//   }
//   let right = buildTreeNode(mid + 1, end);
//   if (right) {
//     node.right = right;
//   }
//   return node;
// };
// return buildTreeNode(0, nums.length);

// 31/31 cases passed (68 ms)
// Your runtime beats 83.35 % of javascript submissions
// Your memory usage beats 25.05 % of javascript submissions (44.9 MB)

// if (!nums.length) return null;
// const mid = Math.floor(nums.length / 2);
// const root = new TreeNode(nums[mid]);
// root.left = sortedArrayToBST(nums.slice(0, mid));
// root.right = sortedArrayToBST(nums.slice(mid + 1));
// return root;

// 31/31 cases passed (61 ms)
// Your runtime beats 97.03 % of javascript submissions
// Your memory usage beats 54.31 % of javascript submissions (44.6 MB)