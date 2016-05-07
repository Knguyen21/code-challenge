

function prefill(n, v) {
console.log(isNaN(parseInt(n)), v);
if(isNaN(parseInt(n))){
  try {
     throw new TypeError(n + " is invalid");
   } catch (e) {
      console.log(e.message);
      console.log(e.name);
      return e.message;
   }
 }
  var repeat = Array.apply(n, new Array(n)).map(function(){
    return v;});
  console.log(repeat);
  return repeat;
}
