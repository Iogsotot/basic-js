const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let Obj = {
    turns: 0,
    seconds: 0
  }
  Obj.turns = (Math.pow(2, disksNumber)) - 1;
  Obj.seconds =  Math.floor(Obj.turns / turnsSpeed * 3600);
  return Obj;
};
