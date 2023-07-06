/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head) return false;
  let checkmark = (node) => {
    if (!node.next) {
      return false;
    } else if (node.next.id) {
      return true;
    } else {
      node.next.id = node.id++;
    }
    return checkmark(node.next);
  };
  head.id = 1;
  return checkmark(head);
};
// @lc code=end

// if (!head) return false;
// let checkmark = (node) => {
//   if (!node.next) {
//     return false;
//   } else if (node.next.id) {
//     return true;
//   } else {
//     node.next.id = node.id++;
//   }
//   return checkmark(node.next);
// };
// head.id = 1;
// return checkmark(head);

// 23/23 cases passed (74 ms)
// Your runtime beats 55.15 % of javascript submissions
// Your memory usage beats 41.3 % of javascript submissions (45.2 MB)