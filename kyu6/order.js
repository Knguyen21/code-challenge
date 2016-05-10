// 
// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.
//
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"


function order(words){
   var arr = words.split(" ");
   var newarr= [];
   console.log(arr);
   for (var i = 0; i < arr.length; i++){
     for (var k = 0; k < arr[i].length; k++){
       if(Number.isInteger(Number(arr[i][k]))){
         newarr[Number(arr[i][k])] = arr[i];
       }
     }
   }
  newarr.shift();
  return newarr.toString().replace(/(,)/g, " ");
}


//best solution
//
// function order(words){
//
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }
