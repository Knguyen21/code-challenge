// Description:
//
// Numbers ending with zeros are boring.
//
// They might be fun in your world, but not here.
//
// Get rid of them. Only the ending ones.
//
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105


'use strict';
function noBoringZeros(n) {
  var digits = (""+ n).split("");
  var len = digits.length - 1;
  for(var i = len; digits[i] === '0'; i--){
      digits.pop(digits[i]);
      console.log(digits);
  }

  return Number(digits.join().replace(/\,/g,""));
}

// 
// best solution
// function noBoringZeros(n) {
//   while(n%10==0 && n!=0){n/=10;}
//   return n;
// }
