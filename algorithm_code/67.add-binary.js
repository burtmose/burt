/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
};
// @lc code=end

// console.log("--", addBinary('11', '1'));
// console.log("--", addBinary('1010', '1011'));
// console.log("--", addBinary('0', '0'));
// /**/let s1 = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101'
// let s2 = '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'
// console.log("--", addBinary(s1, s2));

// let len = Math.max(a.length, b.length), j = 1, p = 0, r = '';
// for (let i = len - 1; i >= 0; i--) {
//     let ai = a[a.length - j]
//     let bi = b[b.length - j]
//     if (ai && bi) {
//         let e = ai == bi
//         if (p) {
//             r = (!e ? '0' : '1') + r;
//             p = (e && ai == '0') ? 0 : 1;
//         } else {
//             r = (e ? '0' : '1') + r;
//             p = (e && ai == '1') ? 1 : 0;
//         }
//         if (i == 0) {
//             return p ? p + r : r;
//         }
//     } else {
//         let n = ai || bi;
//         if (p) {
//             let e1 = n == '1';
//             r = (e1 ? '0' : '1') + r;
//             p = e1 ? 1 : 0;
//             if (i == 0) {
//                 return p + r;
//             }
//         } else {
//             let big = a.length > b.length ? a : b;
//             r = big.substring(0, i + 1) + r;
//             return r;
//         }
//     }
//     j++;
// }

// 296/296 cases passed (75 ms)
// Your runtime beats 18.09 % of javascript submissions
// Your memory usage beats 55.26 % of javascript submissions (43.6 MB)

// let big = a.length > b.length ? a : b, j = 1, p = 0, r = '';
// for (let i = big.length - 1; i >= 0; i--) {
//     let ai = parseInt(a[a.length - j]) || 0;
//     let bi = parseInt(b[b.length - j]) || 0;
//     j++;
//     let n = ai + bi + p;
//     r = n % 2 + r;
//     p = Math.floor(n / 2);
// }
// if (p) {
//     r = p + r;
// }
// return r;

// 296/296 cases passed (75 ms)
// Your runtime beats 18.09 % of javascript submissions
// Your memory usage beats 49.31 % of javascript submissions (44 MB)

// const aBin = `0b${a}`
// const bBin = `0b${b}`
// const sum = BigInt(aBin) + BigInt(bBin)
// return sum.toString(2)

// 296/296 cases passed (52 ms)
// Your runtime beats 96.72 % of javascript submissions
// Your memory usage beats 64.26 % of javascript submissions (42.9 MB)

// return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)

// 296/296 cases passed (62 ms)
// Your runtime beats 71.97 % of javascript submissions
// Your memory usage beats 88.07 % of javascript submissions (42.1 MB)