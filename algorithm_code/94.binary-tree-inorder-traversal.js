/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const stack = [];
    const res = [];
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
};
// @lc code=end

// if (!root) {
//     return [];
// }
// let arr = [root], ca = [root.val];
// while (arr.length > 0) {
//     const c = arr.shift();
//     if (c && c.left) {
//         // console.log("c.left", c.left, c.val);
//         arr.push(c.left);
//         ca.unshift(c.left.val)
//     }
//     if (c && c.right) {
//         // console.log("c.right", c.right, c.val);
//         arr.push(c.right);
//         ca.unshift(c.right.val)
//     }
// }
// let r = []
// for (let i = 0; i < ca.length / 2; i++) {
//     if (ca.length - i - 1 != i) {
//         r.push(ca[ca.length - i - 1])
//     }
//     r.push(ca[i])
// }
// // console.log("ca", ca);
// // console.log("r", r);
// return r


// const stack = [];
// const res = [];
// while (root || stack.length) {
//     if (root) {
//         stack.push(root);
//         root = root.left;
//     } else {
//         root = stack.pop();
//         res.push(root.val);
//         root = root.right;
//     }
// }
// return res;

// 70/70 cases passed (54 ms)
// Your runtime beats 81.62 % of javascript submissions
// Your memory usage beats 35.96 % of javascript submissions (42.2 MB)