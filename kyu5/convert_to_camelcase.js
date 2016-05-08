
//
// function toSnailCase(str){
//   function toLower(newstr) {
//     return "_" + newstr.toLowerCase();
//   }
//   console.log(toLower);
//   return str.replace(/[A-Z]/g, toLower);
//


// }

// TASK
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
// Examples:
//
// // returns "theStealthWarrior"
// toCamelCase("the-stealth-warrior")
//
// // returns "TheStealthWarrior"
// toCamelCase("The_Stealth_Warrior")

'use strict';

function toCamelCase(str){
  var newstr = "";
  for(var i = 0; i < str.length ; i++){
    if(str[i] === '_'|| str[i] === '-'){
      newstr += str[i+1].toUpperCase();
      i++;
    }
    else{
      newstr += str[i];
    }
  }
  console.log(newstr);
  return newstr;
}


//best solution
// function toCamelCase(str){
//       var regExp=/[-_]\w/ig;
//       return str.replace(regExp,function(match){
//             return match.charAt(1).toUpperCase();
//        });
// }
