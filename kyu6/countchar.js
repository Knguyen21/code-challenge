// Description:
//
// The main idea is to count all the occuring characters(UTF-8) in string. If you have string like
//  this aba then the result should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ? Then the result should be empty object literal { }
//
//


'use strict';

function count(string) {
  var obj = {};
  console.log(string);
  if(string.length === 0){
    return obj;
  }
  console.log(string);
  var count = 0;
  for(var i = 0; i <string.length; i++){
    for(var k = 0; k< string.length; k++){
      if (string[i] === string[k]){
        count+=1;
      }
    }
    console.log(string[i]);
    obj[string[i]]= count;
    count = 0;
  }
  console.log(obj);
  return obj;
}

count("abcaaab");


//best solutionfunction count (string) {
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }
