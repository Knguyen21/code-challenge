// Description:
//
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The integers in the array are either entirely odd or entirely even except for a single integer N. Write a method that takes the array as an argument and returns N.
//
// For example:
//
// [2, 4, 0, 100, 4, 11, 2602, 36]
//
// Should return: 11
//
// [160, 3, 1719, 19, 11, 13, -21]
//
// Should return: 160


'use strict';

function findOutlier(integers){
 function isOdd(val){
   return (val % 2 !==0);
 }
 function isEven(val){
   return (val % 2 === 0);
 }
 var oddfilter = integers.filter(isOdd);
 var evenfilter = integers.filter(isEven);
 if (oddfilter.length === 1){
   return oddfilter[0];
 }
 else{
   return evenfilter[0];
 }
}

findOutlier([2,6,8,10,3]);


// best solution
// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
//
//
//   function findOutlier(integers){
//     for( var i=0, o=[], e=[]; i<integers.length; i++ ){
//       (integers[i] % 2 ? o : e).push(integers[i]);
//       if( o.length && e.length && o.length + e.length > 2  )
//         return o.length > e.length ? e[0] : o[0];
//     }
//   }
