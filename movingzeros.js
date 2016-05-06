// Description:
//
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


'use strict';


var moveZeros = function (arr) {
  var noZero = arr.filter(a => a !== 0);
  var allZero = arr.filter(a=> a === 0);
  console.log(noZero);
  console.log(allZero);

  for(var i = 0; i < allZero.length; i++){
    noZero.push(allZero[i]);
  }
   return noZero;
}


// best solution
// var moveZeros = function (arr) {
//   var filtedList = arr.filter(function (num){return num !== 0;});
//   var zeroList = arr.filter(function (num){return num === 0;});
//   return filtedList.concat(zeroList);
// }
