


function sometimes(fn) {
  var counter = 0;
  return function close(a, b){
    counter++
    console.log(counter);
     if(counter > 3 && counter % 2 === 0){
      return "hmm, I don't know!";
     }
     else if(counter >3 && counter % 2 !==0){
       return fn(a, b);
     }
     else{
       return fn(a, b);
     }
  }
}

//best solutionconst sometimes = fn => {
//   let i = 0;
//   return (...args) => ++i && (i < 3 || i % 2) ? fn(...args) : "hmm, I don't know!";
// }
