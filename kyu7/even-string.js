// Write a function that removes all the even characters from a string and returns them in an array.
// If the string is smaller than two characters and longer than 100 characters, the function should return
//  "invalid string".
//
// For example:
//
// function evenChars("abcdefghijklm") {}
// // should return ["b", "d", "f", "h", "j", "l"]
//
// function evenChars("a")
// should return "invalid string"


function evenChars(string) {
  var arr = [];
  if(string.length <=1 || string.length > 100){
    return "invalid string";
  }
  for(var i = 0; i< string.length; i++){
    if((i+1) % 2 === 0){
    arr.push(string[i]);
    }
   }
  return arr;
}

// 
// //best solutionfunction evenChars(string) {
//   return (string.length < 2 || string.length > 100) ? "invalid string" :
//   [...string].filter((x, i) => i % 2);
// }
