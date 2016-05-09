// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.
//
// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
//

function XO(str) {
   lowercase = str.toLowerCase();
    var xarray = [];
    var oarray = [];
  for(var i = 0; i < str.length; i++){
    if(lowercase[i] === 'x'){
      xarray.push(lowercase[i]);
    }
    else if(lowercase[i] === 'o'){
      oarray.push(lowercase[i]);
    }
  }
  return xarray.length === oarray.length ? true : false

}

//best solution
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }


// const XO = str => {
//   str = str.toLowerCase().split('');
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
// }
