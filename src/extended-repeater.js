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
function repeater(str, options) {
  console.log('first--str: ', str);
  console.log('first--options: ', options);

  let arrOfStrs = [];
  let arrOfStrsAddition;
  let arrOfStrsAdditionJoin;
  let arrOfAdditions = [];
  let arrOfAdditionsJoin;
  let emptyStr = '';
  let result = [];

  // if type of str is not string
  if (str && typeof(str) !== 'string') {
    str = emptyStr + str;
  }

  //console.log('str: ', str);

  // if type of options.addition is not string
  if (options.addition === false) {
    options.addition = emptyStr + options.addition;
  }
  else if (options.addition === null) {
    options.addition = emptyStr + options.addition;
  }
  else if (options.addition && typeof(options.addition) !== 'string') {
    options.addition = emptyStr + options.addition;
  }
  

  //console.log('options.addition: ', options.addition);

  //if there are no property separator
  if (!options.separator) {
    options.separator = '+';
  }

  //console.log('options.separator: ', options.separator);

  //if there are no property additionSeparator
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  console.log('options.additionSeparator: ', options.additionSeparator);

  //if there is no property repeatTimes, so we don't add separator
  if (!options.repeatTimes) {
    arrOfStrs.push(str);
  }
  else {
    for (let i = 0; i < options.repeatTimes; i++) {
      arrOfStrs.push(str);
    }
  }

  //console.log('arrOfStrs: ', arrOfStrs);

  //if there is property addition, but there is no property additionRepeatTimes or additionRepeatTimes ===1
  if (options.addition && (!options.additionRepeatTimes || options.additionRepeatTimes === 1)) {
    arrOfAdditions.push(options.addition);
    arrOfAdditionsJoin = arrOfAdditions.join('');
  }

  //if there is property addition and there is property additionRepeatTimes and additionRepeatTimes > 1
  else if (options.addition && options.additionRepeatTimes && options.additionRepeatTimes > 1) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrOfAdditions.push(options.addition);
      arrOfAdditionsJoin = arrOfAdditions.join(`${options.additionSeparator}`);
    }
    //console.log('arrOfAdditionsJoin: ', arrOfAdditionsJoin);
  } 

  else if (!options.addition) {
    options.addition = '';
    arrOfAdditions.push(options.addition);
    arrOfAdditionsJoin = arrOfAdditions.join('');
  }

  //console.log('arrOfAdditions: ', arrOfAdditions);

  //console.log('options after: ', options);

  //add addition to str
  arrOfStrsAddition = arrOfStrs.map(item => {
    return item + arrOfAdditionsJoin;
  });
  
  //console.log('arrOfStrsAddition: ', arrOfStrsAddition);


  if ((options.repeatTimes && options.repeatTimes === 1) || !options.repeatTimes) {
    arrOfAdditionsJoin = arrOfStrsAddition.join('');
    //console.log('arrOfAdditionsJoin: ', arrOfAdditionsJoin);
  }
  else if (options.repeatTimes && options.repeatTimes > 1) {
    arrOfAdditionsJoin = arrOfStrsAddition.join(`${options.separator}`);
    //console.log('arrOfAdditionsJoin: ', arrOfAdditionsJoin);
  }

  return arrOfAdditionsJoin
  

}

module.exports = {
  repeater
};
