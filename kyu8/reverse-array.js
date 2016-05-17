
Given a random integer, return the integers within an array in reverse order.

Example:

348597 => [7,9,5,8,4,3]



function digitize(n) {
  return n.toString().split("").reverse().map(function(num){return parseInt(num);});

}

//best solutionfunction digitize(n){
//   return (n + '').split('').map(Number).reverse();
// }
