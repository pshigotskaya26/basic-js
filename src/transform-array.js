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
  
  let resultArray = [];
 
  try {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  catch {
    if (!(arr instanceof Array)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
  }

  if (arr.length === 0) {
    return [];
  }

  if (arr instanceof Array && (!arr.includes('--discard-next') && !arr.includes('--discard-prev') && !arr.includes('--double-next') && !arr.includes('--double-prev'))) {
    return arr;
  }

  loop1:
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === '--discard-prev') {
      if (arr.indexOf('--discard-prev') === 0) {
        continue loop1;
      }
      else if (arr.indexOf('--discard-prev') !== 0 && resultArray[resultArray.length - 1] !== 'done') {
        resultArray.pop();
        continue loop1;
      }
      else if (arr.indexOf('--discard-prev') !== 0 && resultArray[resultArray.length - 1] == 'done') {
        continue loop1;
      }
    }
    
    else if (arr[i] === '--discard-next') {
      if (arr.indexOf('--discard-next') === arr.length - 1) {
        break;
      }
      else if (arr.indexOf('--discard-next') !== arr.length - 1) {
        resultArray.push('done');
        i = i + 1;
        continue loop1;
      }
    }
    
    else if (arr[i] === '--double-next') {
      if (arr.indexOf('--double-next') === arr.length - 1) {
        break;
      }
      else if (arr.indexOf('--double-next') !== arr.length - 1) {
        resultArray.push(arr[i + 1]);
        continue loop1;
      }
    }
    
    else if (arr[i] === '--double-prev') {
      if (arr.indexOf('--double-prev') === 0) {
        continue loop1;
      }
      else if (arr.indexOf('--double-prev') !== 0 && resultArray[resultArray.length - 1] !== 'done') {
        resultArray.push(arr[i - 1]);
        continue loop1;
      }
      else if (arr.indexOf('--double-prev') !== 0 && resultArray[resultArray.length - 1] === 'done') {
        resultArray.pop();
        continue loop1;
      } 
    } 
    else {
      resultArray.push(arr[i]);
    }
  }
  
  if (resultArray.includes('done')) {
    resultArray.splice(resultArray.indexOf('done'), 1);
    return resultArray;
  }
  return resultArray;
 }

module.exports = {
  transform
};
