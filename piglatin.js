//
// Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
//
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay

function pigIt(str){
  myarray = str.split(" ");
  newarray = myarray.map(function(word){
  pig = word + word[0] + 'ay';
  return pig.slice(1, pig.length);
  });
  return newarray.join(" ");
}

//best solution
// function pigIt(str){
//   return str.split(' ').map(function(el){
//     return el.slice(1) + el.slice(0,1) + 'ay';
//   }).join(' ');
// }
