//
// // Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels for this Kata.
//

function getCount(str) {
  var vowelsCount = 0;
  var lower = str.toLowerCase();
  var array = lower.split("");
  for(var i = 0; i < array.length; i++){
    if(array[i] === 'a' || array[i] === 'e' || array[i] === 'i' || array[i] === 'o' ||  array[i] === 'u'){
    vowelsCount++;
    }
  }

  return vowelsCount;
}

// //best solutionfunction getCount(str) {
//   return (str.match(/[aeiou]/ig)||[]).length;
// }
