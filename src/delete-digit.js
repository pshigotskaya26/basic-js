const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let string = n.toString();
  let arr = [];

  for (let i = 0; i < string.length; i++) {
    let subString1 = string.slice(0, i);
    let subString2 = string.slice(i + 1);
    let result = subString1 + subString2;
    arr.push(+result);
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
