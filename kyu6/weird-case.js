// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed characters in
//  each word lower cased. The indexing just explained is zero based, so the zero-ith index is even,
//  therefore that character should be upper cased.
//
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
//  be present if there are multiple words. Words will be separated by a single space(' ').
//
// Examples:
//
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

'use strict';
//
// function toWeirdCase(string){
//   var arr = string.split(" ");
//   var weird = "";
//   for(var i = 0; i< arr.length; i++){
//     for(var k = 0; k<arr[i].length; k++){
//       k % 2 === 0 ? weird+=arr[i][k].toUpperCase(): weird+=arr[i][k].toLowerCase();
//     }
//     weird+=" ";
//   }
//   console.log(weird);
//   return weird;
// }


function toWeirdCase(string){
  var newstring = "";
  var count = 0;
  for(var i = 0; i< string.length; i++){
      if(string[i] === " "){
        count = 1;
        newstring+=" ";
      }
      else if(count % 2 === 0 ){
        newstring+=(string[i].toUpperCase());
      }
      else if(count % 2 !== 0 ){
      newstring+=(string[i].toLowerCase())
      };
      count++;
    }

  return newstring;
}

toWeirdCase('This is a test');


// //best solutions
//
// function toWeirdCase(string){
//   return string.split(' ').map(function(word){
//     return word.split('').map(function(letter, index){
//       return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
//     }).join('');
//   }).join(' ');
// }
//
//
// //2nd best solution
// function toWeirdCaseCharacter(chr, index)
// {
//   return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
// }
//
// function toWeirdCaseWord(word){
//   return word.split("").map(toWeirdCaseCharacter).join("");
// }
//
// function toWeirdCase(string){
//   return string.split(" ").map(toWeirdCaseWord).join(" ");
// }
