/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function (root) {
  if (!root) return 0;
  let arr = [root],
    l = 1,
    next = [];
  while (arr.length > 0) {
    let n = arr.shift();
    if (!n.left && !n.right) {
      return l;
    } else {
      n.left && next.push(n.left);
      n.right && next.push(n.right);
    }
    if (arr.length == 0) {
      l++;
      arr = next;
      next = [];
    }
  }
  return l;
};
// @lc code=end

// if (!root) return 0;
// let arr = [root],
//   l = 1,
//   next = [];
// while (arr.length > 0) {
//   let n = arr.shift();
//   if (!n.left && !n.right) {
//     return l;
//   } else {
//     n.left && next.push(n.left);
//     n.right && next.push(n.right);
//   }
//   if (arr.length == 0) {
//     l++;
//     arr = next;
//     next = [];
//   }
// }
// return l;

// 52/52 cases passed (206 ms)
// Your runtime beats 92.29 % of javascript submissions
// Your memory usage beats 96.63 % of javascript submissions (97.6 MB)