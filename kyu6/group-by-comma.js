// Finish the solution so that it takes an input 'n' (integer) and returns a string that is the
// decimal representation of the number grouped by commas after every 3 digits.
//
// Assume: 0 <= n < 1000000000
//
//        1  ->           "1"
//       10  ->          "10"
//      100  ->         "100"
//     1000  ->       "1,000"
//    10000  ->      "10,000"
//   100000  ->     "100,000"
//  1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"


function groupByCommas(n) {
  var arr = n.toString().split("");
  var count = 0;
  var newarr = [];
  var i = arr.length;
  for(i; i > 0; i--){
    count++;
    console.log(count);
    newarr.unshift(arr[i-1]);
    if(count % 3 === 0 && count !== arr.length){
      newarr.unshift(",");
    }
  }
  var str = newarr.join('');
  console.log(str);
  return str;

}

//best solution
// function groupByCommas(n) {
//   return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

//second best


// function groupByCommas(n) {
//   var s = n.toString(),
//       r = [];
//
//   // reverse number string so we can easily count up in blocks of 3
//   s = reverse(s);
//
//   for (var i = 0, l = s.length; i < l; i += 3) {
//     r.push(s.substr(i, 3));
//   }
//
//   // combine the groups of 3 numbers into string, then reverse back to original order
//   return reverse(r.join(','));
// }
//
// function reverse(s) {
//   return s.split('').reverse().join('');
// }
