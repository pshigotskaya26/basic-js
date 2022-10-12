const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
  if (!arguments.length) {
    return 'Unable to determine the time of year!';
  }
  
  else {
    try {
      date.getTime();
    }
    catch {
      throw new Error('Invalid date!');
    }
    if (date instanceof Date) {
      let VariableMonth = date.getMonth();
      if (VariableMonth === 11 || VariableMonth < 2) {
        return 'winter';
      }
      else if (VariableMonth >= 2 && VariableMonth < 5) {
        return 'spring';
      }
      else if (VariableMonth >= 5 && VariableMonth < 8) {
        return 'summer';
      }
      else return 'autumn';

    }
    else return 'Invalid date!';
  }
}

module.exports = {
  getSeason
};
