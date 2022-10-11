const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  if (matrix.length === 0) {
    return 0;
  }
  else {
    let generalArray = [];
    let countOfCats = 0;

    matrix.forEach(item => {
      generalArray.push(...item);
    });

    generalArray.forEach(item => {
      if (item === '^^') {
        countOfCats++;
      }
    });

    return countOfCats;
  }
}

module.exports = {
  countCats
};
