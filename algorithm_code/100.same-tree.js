/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let compare = function (a, b) {
    if (!a && !b) {
      return true;
    } else if ((!a && b) || (a && !b) || a.val != b.val) {
      return false;
    }
    return compare(a.left, b.left) && compare(a.right, b.right);
  };
  if (p && q) {
    return compare(p, q);
  } else if (!p && !q) {
    return true;
  } else {
    return false;
  }
};
// @lc code=end

// let compare = function (a, b) {
//   if (a.val != b.val) {
//     return true;
//   }
//   if (a.left && b.left) {
//     let n = compare(a.left, b.left);
//     if (n) {
//       return n;
//     }
//   } else if (!a.left && !b.left) {
//   } else {
//     return true;
//   }
//   if (a.right && b.right) {
//     let n = compare(a.right, b.right);
//     if (n) {
//       return n;
//     }
//   } else if (!a.right && !b.right) {
//   } else {
//     return true;
//   }
// };
// if (p && q) {
//   let n = compare(p, q);
//   return !n;
// } else if (!p && !q) {
//   return true;
// } else {
//   return false;
// }

// 60/60 cases passed (65 ms)
// Your runtime beats 21.76 % of javascript submissions
// Your memory usage beats 59.45 % of javascript submissions (42.2 MB)

// if (!p && !q) return true;
// if (!p || !q || p.val !== q.val) return false;
// return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

// 60/60 cases passed (60 ms)
// Your runtime beats 50.42 % of javascript submissions
// Your memory usage beats 59.45 % of javascript submissions (42.2 MB)

// let compare = function (a, b) {
//     if (!a && !b) {
//       return true;
//     } else if ((!a && b) || (a && !b) || a.val != b.val) {
//       return false;
//     }
//     return compare(a.left, b.left) && compare(a.right, b.right);
//   };
//   if (p && q) {
//     return compare(p, q);
//   } else if (!p && !q) {
//     return true;
//   } else {
//     return false;
//   }

// 60/60 cases passed (51 ms)
// Your runtime beats 90.94 % of javascript submissions
// Your memory usage beats 20.23 % of javascript submissions (42.6 MB)