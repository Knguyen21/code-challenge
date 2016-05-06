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
