/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) {
        return 1;
    }
    let add2step = 1;
    let add1step = 1;
    let curStep = 0;
    for (let i = 2; i <= n; i++) {
        curStep = add2step + add1step;
        add2step = add1step;
        add1step = curStep;
    }
    return curStep;
};
// @lc code=end

// a2 a1 0c
// a2 a2 a1 0c

// console.log("--", climbStairs(3));
// console.log("--", climbStairs(44)); // 1134903170
// console.log("--", Math.pow(2, 42));

// let step1 = function (n) {
//     if (n == 1) {
//         return 1;
//     }
//     n = n - 1;
//     return step1(n) + step2(n)
// }
// let step2 = function (n) {
//     if (n == 1) {
//         return 0;
//     }
//     if (n == 2) {
//         return 1;
//     }
//     n = n - 2;
//     return step1(n) + step2(n)
// }
// let t = step1(n) + step2(n);
// return t;

// Time Limit Exceeded

// let step = (n) => {
//     if (n == 1) {
//         return 1;
//     }
//     if (n == 2) {
//         return 2;
//     }
//     return step(n - 1) + step(n - 2);
// }
// return step(n)

// Time Limit Exceeded

// let tm = new Map();
// let step = function (num) {
//     if (num == 0) {
//         return 1;
//     }
//     if (num <= 2) {
//         return num;
//     }
//     if (tm.has(num)) {
//         return tm.get(num);
//     } else {
//         tm.set(num, (step(num - 1) + step(num - 2)));
//         return tm.get(num);
//     }
// }
// return step(n)

// 45/45 cases passed (61 ms)
// Your runtime beats 38.14 % of javascript submissions
// Your memory usage beats 24.82 % of javascript submissions (42.1 MB)

// if (n < 2) {
//     return 1;
// }
// let add2step = 1;
// let add1step = 1;
// let curStep = 0;
// for (let i = 2; i <= n; i++) {
//     curStep = add2step + add1step;
//     add2step = add1step;
//     add1step = curStep;
// }
// return curStep;

// 45/45 cases passed (51 ms)
// Your runtime beats 87.43 % of javascript submissions
// Your memory usage beats 56.42 % of javascript submissions (41.7 MB)