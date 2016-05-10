// Your task is simply to count the total number of lowercase letters in a string.
//
// Examples
//
// lowercaseCount("abc"); ===> 3
//
// lowercaseCount("abcABC123"); ===> 3
//
// lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
//
// lowercaseCount(""); ===> 0;
//
// lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
//
// lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
//

function lowercaseCount(str){
    var arr = str.match(/[a-z]/g);
    return arr === null ? 0 : arr.length;
 }

//best solution
// function lowercaseCount(str){
//     return (str.match(/[a-z]/g) || []).length
// }
