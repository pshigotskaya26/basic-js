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
  //if there are no one argument or type of sampleActivity is not string
  if (!arguments.length || typeof(sampleActivity) !== 'string') {
    return false;
  }
  //if type of sampleActivity is string
  else {
    const numberFromString = +sampleActivity;
    //if numberFromString is number and 
    if (typeof(numberFromString) === 'number' && numberFromString > 0 && numberFromString <= MODERN_ACTIVITY) {
      let age = Math.ceil(Math.log(MODERN_ACTIVITY/numberFromString)/(0.693/HALF_LIFE_PERIOD));
      return age;
    }
    else {
      return false;
    }

  }
  //throw new NotImplementedError('Not implemented');
 //let a = (Math.log(MODERN_ACTIVITY/9))/(1.22* Math.pow(10, -4));
 //let age = Math.ceil(Math.log(15/13.33347987044412)/(0.693/HALF_LIFE_PERIOD));
 //return age;
}

module.exports = {
  dateSample
};
