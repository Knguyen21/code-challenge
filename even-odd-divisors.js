// Description:
//
// Given an integer n return 'odd' if the number of its divisors is odd. Otherwise return 'even'.
//
// Examples:
//
// All prime numbers have exactly two divisors (hence 'even')
//
// For n=12 the divisors are [1,2,3,4,6,12] – 'even'
//
// For n=4 the divisors are [1,2,4] – 'odd'


//Works, but toooo Slow
//
// function oddity(n){
// var num;
//   for(var i = 0; i <= n; i++){
//   if(n % i === 0){
//     if(n/i === i){
//       return 'odd';
//     }
//     else if(i === num){
//       return 'even';
//     }
//    num = n/i;
//    }
//   }
// }

// too slow

// I realized that if a number is a perfect square, then it is has an odd number of divisors.
function oddity(n){
return n > 0 && Math.sqrt(n) % 1 === 0 ? "odd" : "even";
}
