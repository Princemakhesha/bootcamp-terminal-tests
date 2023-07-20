var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ');
var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');


module.exports = function allFromTown(list, code){
    listNew = list.split(",");
      var sameRegNum = [];
        for(let item of listNew){
          if(item.includes(code)){
            sameRegNum.push(item.trim());
          }
        }
      return sameRegNum;
    }