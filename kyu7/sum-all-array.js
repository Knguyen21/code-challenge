// You are given an array of values.
//
// Sum every number value in the array, and any nested arrays (to any depth).
//
// Ignore all other types of values.



'use strict';

function arraySum(arr) {
  var newarr = arr.join(" ").replace((/(,)/g), ' ').split(" ");
  var filtered = [];
  for(var i =0; i < newarr.length; i++){
    if (!Number.isNaN(parseInt(newarr[i])) &&  newarr[i] !== '15;\n'){
    filtered.push(newarr[i]);
    }

  }

  return filtered.reduce((prev, curr) => Number(prev) + Number(curr));
}

arraySum([1, 2])


// //best solution
// function arraySum(arr) {
//   var output = 0;
//   for (var i in arr) {
//     var item = arr[i];
//     if ( typeof(item) === "number"  )  { output += item;           }
//     if ( item.constructor === Array )  { output += arraySum(item); }
//   }
//   return output;
// }
//
//
// function arraySum(arr) {
//   return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
// }
