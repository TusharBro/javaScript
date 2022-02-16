// const year = 3686;
// const remainder = year % 4;

// if(remainder == 0){
//   console.log('this is leap year');
// }
// else{
//   console.log('this is not leap year');
// }


function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder == 0){
    return true;
  }
  else{
    return false;
  }
}
const check = isLeapYear(2000);
console.log(check);