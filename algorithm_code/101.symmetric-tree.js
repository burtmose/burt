/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let compare = function (a, b) {
    if (!a && !b) return true;
    if (!a || !b || a.val != b.val) return false;
    return compare(a.left, b.right) && compare(a.right, b.left);
  };
  return compare(root.left, root.right);
};
// @lc code=end

// let compare = function (a, b) {
//     if (!a && !b) return true;
//     if (!a || !b || a.val != b.val) return false;
//     return compare(a.left, b.right) && compare(a.right, b.left);
//   };
//   return compare(root.left, root.right);

// 199/199 cases passed (67 ms)
// Your runtime beats 66.57 % of javascript submissions
// Your memory usage beats 50.65 % of javascript submissions (44.5 MB)