var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
var regNumbersForPaarl = allPaarl(regNumbers);

var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
var regNumbersForPaarl = allPaarl(regNumbers);

var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
var regNumbersForPaarl = allPaarl(regNumbers);

module.exports = function allPaarl(registrationNumbers) {
  var regNumbers = registrationNumbers.split(", ");
  var regNumbersForPaarl = [];
  for (var i = 0; i < regNumbers.length; i++) {
    if (regNumbers[i].startsWith("CJ")) {
      regNumbersForPaarl.push(regNumbers[i]);
    }
  }
  return regNumbersForPaarl
}