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
