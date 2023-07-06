/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
var isBalanced = function (root) {
  let Height = function (root) {
    if (root == null) return 0;
    let leftHeight = Height(root.left);
    let rightHight = Height(root.right);
    if (leftHeight == -1 || rightHight == -1) return -1;
    if (Math.abs(leftHeight - rightHight) > 1) return -1;
    return Math.max(leftHeight, rightHight) + 1;
  };
  if (Height(root) == -1) return false;
  return true;
};
// @lc code=end

// let arr = [root],
//     next = [],
//     balance = 2,
//     allow1 = true;
//   while (arr.length > 1) {
//     let n = arr.shift();
//     console.log("n.val", n.val);
//     n.left && next.push(n.left);
//     n.right && next.push(n.right);
//     if (arr.length == 0) {
//       arr = next;
//       if (next.length != balance) {
//         if (allow1) {
//           allow1 = false;
//         } else {
//           return false;
//         }
//       }
//       balance = 2 * balance;
//     }
//   }
//   return true;


// let Height = function (root) {
//    if (root == null) return 0;
//    let leftHeight = Height(root.left);
//    let rightHight = Height(root.right);
//    if (leftHeight == -1 || rightHight == -1) return -1;
//    if (Math.abs(leftHeight - rightHight) > 1) return -1;
//    return Math.max(leftHeight, rightHight) + 1;
//  };
//  if (Height(root) == -1) return false;
//  return true;

//  228/228 cases passed (69 ms)
// Your runtime beats 85.3 % of javascript submissions
// Your memory usage beats 36.16 % of javascript submissions (47.6 MB)