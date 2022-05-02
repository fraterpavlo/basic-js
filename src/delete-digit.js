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
  let str = n.toString();
  let arr = str.split('');
  let result = 0;
  for (let i = 0; i<arr.length; ++i) {
    let iterArray = arr.slice();
    iterArray.splice(i, 1);
    if (iterArray.join('') > result) result = iterArray.join('');
    continue;
  }
  return +result;
}


module.exports = {
  deleteDigit
};
