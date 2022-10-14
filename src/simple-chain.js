const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length();
  },

  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('()');
    }
    else if (arguments.length !== 0) {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || (Number.isInteger(position) === false) || position <= 0 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let stringFromChain = this.chain.join('~~');
    this.chain = [];
    return stringFromChain;
  }
};

module.exports = {
  chainMaker
};
