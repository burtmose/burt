/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let node = head;
    while (node) {
        if (node.next && node.val == node.next.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head;
};
// @lc code=end

// let node = head;
// while (node) {
//     while (node.next && node.val == node.next.val) {
//         node.next = node.next.next
//     }
//     node = node.next
// }
// return head;

// 166/166 cases passed (75 ms)
// Your runtime beats 30.67 % of javascript submissions
// Your memory usage beats 23.48 % of javascript submissions (44.5 MB)

// let node = head;
// while (node) {
//     if (node.next && node.val == node.next.val) {
//         node.next = node.next.next
//     } else {
//         node = node.next
//     }
// }
// return head;

// 166/166 cases passed (67 ms)
// Your runtime beats 69.01 % of javascript submissions
// Your memory usage beats 16.41 % of javascript submissions (44.7 MB)
