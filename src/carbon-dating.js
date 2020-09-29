const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = parseInt(sampleActivity, 10);
  if (isNaN(sampleActivityNumber) || !sampleActivityNumber || sampleActivityNumber == 'undefined' || sampleActivity <= 0 ||  sampleActivity > 15 || typeof(sampleActivity) !== 'string' ) { 
    return false; 
  }
  const ln = 0.693;
  const t = Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY ) / ln * HALF_LIFE_PERIOD) * -1;
  return t;
};
