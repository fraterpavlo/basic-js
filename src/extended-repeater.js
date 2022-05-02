const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, {repeatTimes = 1, 
                        separator = '+', 
                        addition = '',
                        additionRepeatTimes = 1, 
                        additionSeparator = '|'} = {}) {

  if (typeof str !== "string") str = String(str);
  if (typeof addition !== "string") addition = String(addition);
  if (!repeatTimes) repeatTimes = 0;
  if (!additionRepeatTimes) additionRepeatTimes = 0;

  let additionStr = Array(additionRepeatTimes)
                      .fill(addition)
                      .join(additionSeparator)

  let resultStr = Array(repeatTimes)
                    .fill(str + additionStr)
                    .join(separator);

  return resultStr;

}


module.exports = {
  repeater
};

