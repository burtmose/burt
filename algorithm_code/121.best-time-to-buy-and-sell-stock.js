/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  let min = prices[0];
  let cur = prices[1];
  let p = cur > min ? cur - min : 0;
  for (let i = 2, s = 0; i < prices.length; i++) {
    cur = prices[i];
    while (s < i) {
      if (prices[s] < min) min = prices[s];
      s++;
    }
    if (cur > min) {
      p = Math.max(cur - min, p);
    }
  }
  return p;
};
// @lc code=end

// maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([1, 2]);
// maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);

// if (prices.length <= 1) return 0;
// let min = prices[0];
// let cur = prices[1];
// let p = cur > min ? cur - min : 0;
// for (let i = 2, s = 0; i < prices.length; i++) {
// cur = prices[i];
// while (s < i) {
//     if (prices[s] < min) min = prices[s];
//     s++;
// }
// if (cur > min) {
//     p = Math.max(cur - min, p);
// }
// }
// return p;

// 211/211 cases passed (81 ms)
// Your runtime beats 72.54 % of javascript submissions
// Your memory usage beats 99.79 % of javascript submissions (50.6 MB)
