module.exports = function regCheck(item1, item2){
    if (item1.includes(item2)){
      return true;
    }
    else {
      return false;
    }
  }
  console.log(regCheck('DC 55 YU GP', 'EC'))
  