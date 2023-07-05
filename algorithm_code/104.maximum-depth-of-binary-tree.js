/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function (root) {
  let deep = function (n, l) {
    if (!n) {
      return l;
    }
    l++;
    return Math.max(deep(n.left, l), deep(n.right, l));
  };
  return deep(root, 0);
};
// @lc code=end

// let deep = function (n, l) {
//     if (!n) {
//       return l;
//     }
//     l++;
//     return Math.max(deep(n.left, l), deep(n.right, l));
//   };
//   return deep(root, 0);

// 39/39 cases passed (59 ms)
// Your runtime beats 93.35 % of javascript submissions
// Your memory usage beats 85.78 % of javascript submissions (44.9 MB)