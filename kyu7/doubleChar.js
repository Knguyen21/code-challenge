// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// doubleChar("String") ==> "SSttrriinngg"
//
// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
//
// doubleChar("1234!_ ") ==> "11223344!!__  "
//
//


function doubleChar(str) {
  var double ="";
  for(var i = 0; i < str.length; i++){
    double+=  str[i] +str[i];
  }
  return double
}


//best solution
// const doubleChar = (str) => str.split("").map(c => c + c).join("");
