function sayLoveYou(){
  console.log('jan o baby');
  console.log('Tushar Mahmud');
}
sayLoveYou();
var date = 14;
var place = "Resturent";
sayLoveYou();
var hangoutPlace = "TSC";
sayLoveYou();



function doubleIt(num){
  var result = num * 2;
  console.log(result);
}

doubleIt(5);
doubleIt(50);
doubleIt(500);



function doubleIt(num){
  var result = num * 2;
  return result;
}

var first = doubleIt(5);
var second = doubleIt(50);
var total = first + second;
console.log(total);