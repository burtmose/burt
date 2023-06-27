/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};
// @lc code=end

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))

// var mergeTwoLists = function (list1, list2) {
//     let i1 = 0, i2 = 0, r = new ListNode();
//     while (i1 < list1.length || i2 < list2.length) {
//         if (i1 < list1.length && list1[i1] <= list2[i2]) {
//             r.val.push(list1[i1]);
//             i1++;
//         } else {
//             r.val.push(list1[i2]);
//             i2++;
//         }
//     }
//     return r;
// };

// 数组合并，不是链表合并

// if (!l1) return l2;
// else if (!l2) return l1;
// else if (l1.val <= l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
// } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2
// }

// 208/208 cases passed (74 ms)
// Your runtime beats 25.52 % of javascript submissions
// Your memory usage beats 63.08 % of javascript submissions (44 MB)

