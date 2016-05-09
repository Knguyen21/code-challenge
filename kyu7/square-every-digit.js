// // Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out.
//
// Note: The function accepts an integer and returns an integer


function squareDigits(num){
  var digit =(""+num).split("");
  var square =""
  console.log(digit);
  for(var i= 0; i < digit.length; i++){
    square+=((digit[i] * digit[i]));
  }
  return parseInt(square);
}



//best solution
// function squareDigits(num){
//   return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
//
// }
