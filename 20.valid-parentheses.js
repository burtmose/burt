/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let p = []
    let e2s = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
            p.push(s[i])
        } else if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
            if (p.length == 0) {
                return false;
            }
            if (e2s[p[p.length - 1]] == s[i]) {
                p.pop()
            } else {
                return false;
            }
        }
    }
    return p.length == 0;
};
// @lc code=end

// isValid('()[]{}()[]{}')
// console.log("--", isValid('['));

// let p = []
// let e2s = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
// }
// for (let i = 0; i < s.length; i++) {
//     if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
//         p.push(s[i])
//     } else if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
//         if (p.length == 0) {
//             return false;
//         }
//         if (e2s[p[p.length - 1]] == s[i]) {
//             p.pop()
//         } else {
//             return false;
//         }
//     }
// }
// return p.length == 0;

// 93/93 cases passed (81 ms)
// Your runtime beats 9.3 % of javascript submissions
// Your memory usage beats 64.22 % of javascript submissions (42.4 MB)

// let p = []
// for (let i = 0; i < s.length; i++) {
//     if (s[i] == '(') {
//         p.push(')')
//     } else if (s[i] == '[') {
//         p.push(']')
//     } else if (s[i] == '{') {
//         p.push('}')
//     } else if (s[i] == ')' || s[i] == ']' || s[i] == '}') {
//         if (p.pop() !== s[i]) {
//             return false;
//         }
//     }
// }
// return p.length == 0;

// 93/93 cases passed (78 ms)
// Your runtime beats 11.39 % of javascript submissions
// Your memory usage beats 43.04 % of javascript submissions (42.6 MB)