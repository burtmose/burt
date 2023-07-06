/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let cal = (root, pret) => {
    if (root == null) {
      return false;
    }
    let curval = root.val + pret;
    if (root.left == null && root.right == null && curval == targetSum) {
      return true;
    }
    return cal(root.left, curval) || cal(root.right, curval);
  };
  return cal(root, 0);
};
// @lc code=end

// let cal = (root, pret) => {
// if (root == null) {
//     return false;
// }
// let curval = root.val + pret;
// if (root.left == null && root.right == null && curval == targetSum) {
//     return true;
// }
// return cal(root.left, curval) || cal(root.right, curval);
// };
// return cal(root, 0);

// 117/117 cases passed (60 ms)
// Your runtime beats 92.01 % of javascript submissions
// Your memory usage beats 99.33 % of javascript submissions (44.8 MB)
