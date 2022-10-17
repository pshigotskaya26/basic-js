const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arS1 = s1.split('');
  let arS2 = s2.split('');
  let count = 0;

  for (let i = 0; i < arS1.length; i++) {
    let currentElement = arS1[i];

    if (arS2.includes(currentElement)) {
      let indexOfLetter = arS2.indexOf(currentElement);
      arS2.splice(indexOfLetter, 1);
      count++;
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
