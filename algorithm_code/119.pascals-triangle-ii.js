/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (r) {
  var ans = new Array(r + 1);
  ans[0] = ans[r] = 1;
  for (i = 1, up = r; i < r; i++, up--) {
    ans[i] = (ans[i - 1] * up) / i;
    console.log("ans[i-1]", ans[i], "=", ans[i - 1], "*", up, "/", i);
  }
  console.log("ans", ans);
  return ans;
};
// @lc code=end
getRow(5);

// let result = [];
// rowIndex += 1;
// while (rowIndex > 0) {
//   let newarr = [1];
//   let pre = result[result.length - 1];
//   if (pre) {
//     for (let i = 1; i < pre.length; i++) {
//       newarr[i] = pre[i] + pre[i - 1];
//     }
//     newarr.push(1);
//   }
//   result.push(newarr);
//   rowIndex--;
//   if(rowIndex == 0){
//       return newarr;
//   }
// }
// return [];

// 34/34 cases passed (54 ms)
// Your runtime beats 82.72 % of javascript submissions
// Your memory usage beats 58.48 % of javascript submissions (42 MB)
