const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  
  getLength() {
    return this.chain.length
  },
  
  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
    } else this.chain.push(`( ${value} )`);
    return this;
  },
  
  removeLink(position) {
    if (Number.isInteger(position) && position !== 'undefined' && position >= 0) {
//       console.log('try');
      this.chain.splice(position - 1 , 1);
      return this;
    } else this.newError()
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this

  },
  finishChain() {
    let length = this.chain.length;
    let newChain = this.chain;
    this.chain = [];
    
    for (let i = 0; i < length; i++) {
      if(newChain[i+1]) {
        newChain[i] += '~~';
      } 
    }

    return newChain.join('');
  },

  newError() {
    this.chain = [];
    throw new Error();
  }
};


module.exports = chainMaker;
