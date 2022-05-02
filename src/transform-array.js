const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("\'arr\' parameter must be an instance of the Array!");
  if (arr.length == 0) return arr;
  let array = arr.slice();
  for (let i = 0; i<array.length; ++i) {
    if (typeof array[i] == "string") {
      if (array[i] === "--discard-next") {
        if (!array[i+1] && array[i+1] !== 0) continue;
        array.splice(i+1, 1);
      } else if (array[i] === "--discard-prev") {
        if (!array[i-1] && array[i-1] !== 0) continue;
        array.splice(i-1, 1);
      } else if (array[i] === "--double-next") {
        if (!array[i+1] && array[i+1] !== 0) continue;
        array.splice(i+1, 0, array[i+1]);
      } else if (array[i] === "--double-prev") {
        if (!array[i-1] && array[i-1] !== 0) continue;
        array.splice(i, 1, array[i-1]);
      }
    }
    continue;
  }

  function isControlSequence (item) {
    if (item == "--discard-next" ||
        item == "--discard-prev" ||
        item == "--double-next" ||
        item == "--double-prev") return true;
    
    return false;
  }

  return array.filter(item => !(isControlSequence(item)));
}

module.exports = {
  transform
};
