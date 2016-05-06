// Description:
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.




'use strict' ;
 function solution(num){
   let total = 0;
   let i = num-1;
   for(i; i>=3; i--){
     if(i % 5 === 0 || i%3 === 0){
       total += i;
     }
   }
   console.log(total);
  return total;
}

solution(10);


//Best solutionfunction solution(number){
// function solution(number){
//   var sum = 0;
//

//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }
