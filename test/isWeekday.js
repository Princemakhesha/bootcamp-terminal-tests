module.exports = function isWeekday(Weekday){
    if(Weekday === "Monday" || Weekday === "Tuesday" || Weekday === "Wednesday" || Weekday === "Thursday" || Weekday === "Friday"){
      return true;
    }
    else {
      return false;
    }
  }