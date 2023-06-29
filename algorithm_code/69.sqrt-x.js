/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid > x) {
            right = mid - 1;
        } else if (mid * mid < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};
// @lc code=end

// console.log("--", mySqrt(8));

// return Math.floor(Math.pow(x, 0.5));

// 1017/1017 cases passed (76 ms)
// Your runtime beats 53.71 % of javascript submissions
// Your memory usage beats 79.31 % of javascript submissions (43.4 MB)

// var left = 1;
// var right = Math.floor(x / 2) + 1;
// var mid;
// while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (mid * mid > x) {
//         right = mid - 1;
//     } else if (mid * mid < x) {
//         left = mid + 1;
//     } else {
//         return mid;
//     }
// }
// return right;

// 1017/1017 cases passed (77 ms)
// Your runtime beats 50.47 % of javascript submissions
// Your memory usage beats 21.08 % of javascript submissions (44.1 MB)