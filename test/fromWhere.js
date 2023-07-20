module.exports = function fromWhere(reg_number){
    if (reg_number.startsWith("CY")){
      return "Bellville"
    }
    else if (reg_number.startsWith("CJ")){
      return "Paarl"
    }
    else if (reg_number.startsWith("CA")){
      return "Cape Town"
    }
    else {
      return "Some other place!"
    }
    
  }