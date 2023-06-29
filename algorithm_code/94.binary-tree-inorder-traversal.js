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
    let arr = [root], ca = [root.val];
    while (arr.length > 0) {
        const c = arr.shift();
        if (c && c.left) {
            console.log("c.left", c.left, c.val);
            arr.push(c.left);
            ca.unshift(c.left.val)
        }
        if (c && c.right) {
            console.log("c.right", c.right, c.val);
            arr.push(c.right);
            ca.unshift(c.right.val)
        }
    }
    // let r = []
    // for (let i = 0; i < arr.length / 2; i++) {
    //     r.push(arr[i])
    //     if (arr.length - i - 1 != i) {
    //         r.push(arr[arr.length - i - 1])
    //     }
    // }
    console.log("ca", ca);
    // return r
};
// @lc code=end

