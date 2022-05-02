const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!(+sampleActivity) || 
        sampleActivity.length == 0 ||  
        typeof  sampleActivity != "string" ||
        Math.sign(+sampleActivity) === -1 ||
        +sampleActivity > 15) return false;
  sampleActivity = +sampleActivity;
  let k = 0.0001209424;
  let result = Math.log(15/sampleActivity) / k;
  return Math.ceil(result);
}

module.exports = {
  dateSample
};


// npm run test -- test/recursive-depth.test.js