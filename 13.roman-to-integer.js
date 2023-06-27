/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let s2n = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])
    let r = 0
    for (let i = 0; i < s.length; i++) {
        let c = s2n.get(s[i])
        let n = s2n.get(s[i + 1])
        if (c < n) {
            r += n - c;
            i++;
        } else {
            r += c
        }
    }
    return r;
};
// @lc code=end

console.log("--", romanToInt("MCD"));

// let s2n = new Map([
//     ['I', 1],
//     ['V', 5],
//     ['X', 10],
//     ['L', 50],
//     ['C', 100],
//     ['D', 500],
//     ['M', 1000],
// ])
// let r = 0;
// if (s.length == 1) {
//     return s2n.get(s)
// }
// for (let i = 1; i < s.length; i++) {
//     let c = s[i]
//     let p = s[i - 1]
//     let cn = s2n.get(c)
//     let pn = s2n.get(p)
//     if (pn < cn) {
//         r += cn - pn
//         i++;
//     } else {
//         r += pn
//     }
//     if (i == s.length - 1) {
//         r += s2n.get(s[i])
//     }
// }
// return r;

// 3999/3999 cases passed (142 ms)
// Your runtime beats 27.09 % of javascript submissions
// Your memory usage beats 21.33 % of javascript submissions (48.9 MB)

// let s2n = new Map([
//     ['I', 1],
//     ['V', 5],
//     ['X', 10],
//     ['L', 50],
//     ['C', 100],
//     ['D', 500],
//     ['M', 1000],
// ])
// let r = 0
// for (let i = 0; i < s.length; i++) {
//     let c = s2n.get(s[i])
//     let n = s2n.get(s[i + 1])
//     if (c < n) {
//         r += n - c;
//         i++;
//     } else {
//         r += c
//     }
// }
// return r;

// 3999/3999 cases passed (144 ms)
// Your runtime beats 23.34 % of javascript submissions
// Your memory usage beats 22.76 % of javascript submissions (48.8 MB)