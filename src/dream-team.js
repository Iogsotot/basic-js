const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {return false}

  let dreamTeam = '';
  for (let i=0; i < members.length; i++) {
    if (typeof members[i] === 'string' && members[i] !== ' ') {
      dreamTeam += members[i].trim()[0].toUpperCase();
    }
  }
  dreamTeam = dreamTeam.split('').sort();
  dreamTeam = dreamTeam.join('');
  return dreamTeam
};
