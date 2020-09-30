const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === null) { str = 'null'}
  let basicString = str.toString()
  let repeatTimes = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
  let separator = (options.separator !== undefined) ? options.separator : '+';
  let addition = (options.addition !== undefined) ? (options.addition === null) ? 'null' : options.addition.toString() : "";
  let additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
  let additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';

  basicString = (basicString + (addition + additionSeparator).repeat(additionRepeatTimes));
  let mainStr = (basicString.slice(0, (basicString.length - additionSeparator.length)) + separator).repeat(repeatTimes);
  return mainStr.slice(0, (mainStr.length - separator.length))
};
  