const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    if(!Array.isArray(arr)) {return 0};
    let level = 1;
    arr.forEach((item) => {
      // console.log('item - ' + item)
      let currentLevel = this.calculateDepth(item);
      if ((currentLevel + 1) > level) {
        level = currentLevel + 1;
      }
    });

    return level;
  }
};