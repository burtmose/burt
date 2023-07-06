/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};
// @lc code=end

// console.log("result ", isPalindrome("A man, a plan, a canal: Panama"));
// console.log("result ", isPalindrome("0P"));
// console.log("result ", isPalindrome(",,,,,,,,,,,,acva"));

// s = s.toLocaleLowerCase();
// let reg = /[a-z0-9]/;
// for (let i = 0, j = s.length - 1; i < s.length; i++) {
//   if (reg.test(s[i])) {
//     while (j > i) {
//       let s2 = s[j--];
//       if (reg.test(s2)) {
//         if (s2 != s[i]) {
//           return false;
//         } else {
//           break;
//         }
//       }
//     }
//   }
// }
// return true;

// 485/485 cases passed (73 ms)
// Your runtime beats 61.71 % of javascript submissions
// Your memory usage beats 68.39 % of javascript submissions (45 MB)
