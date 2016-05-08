// Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything
// was basically related to, and explained by sex.
//
// In this kata, the toFreud() function will take a string as its argument, and return a string with
// every word replaced by the explanation to everything, according to Freud.
// Note that an empty string, or no arguments, should result in the ouput being ""(empty string).


'use strict';
function toFreud(string) {
if(string === ""){
return "";
}
 var regex = new RegExp(',', 'g');
  var result =string.split(" ").map(function(){return "sex";}).toString().replace(regex, ' ');
console.log(result);
return result;
}


//best solution
// var toFreud=s=>s.replace(/[^ ]+/g,'sex')
