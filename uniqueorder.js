// Description:
//
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]




'use strict';

var uniqueInOrder=function(iterable){
    var unique = iterable[0];
    var array;
    if (iterable.length === 0){
        console.log(iterable);
        return [];
    }
    else {
        array = [];
        array.push(unique);
        for (var i = 1; i <= iterable.length - 1; i++){
            if (unique !== iterable[i]){
                unique = iterable[i];
                array.push(iterable[i]);
            }
        }
        console.log(array);
        return array;
    }
}

uniqueInOrder([])


//best solutionfunction uniqueInOrder(it) {
//   var result = []
//   var last
//
//   for (var i = 0; i < it.length; i++) {
//     if (it[i] !== last) {
//       result.push(last = it[i])
//     }
//   }
//
//   return result
// }
