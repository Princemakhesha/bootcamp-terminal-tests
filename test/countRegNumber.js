var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
var regCount = countRegNumber('CA 182736')

module.exports = function countRegNumber(item) {
    const Regcount = item.split(',');
    return Regcount.length; 
  }
  
  console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'))