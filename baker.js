


function cakes(recipe, available) {
  var recipeA = Object.keys(recipe);
  var availA = Object.keys(available);
  var count = 0;
  for(var r = 0; r < recipeA.length; r++){
    for(var a = 0; a < availA.length; a++){
      if(availA[a] === recipeA[r]){
        count++;
      }
    }
  }
  if(count !== recipeA.length){
  return 0;
   }
   var min = Math.round(available[recipeA[0]]/recipe[recipeA[0]]);
   for(var i = 1; i < recipeA.length; i++){
     amount = Math.floor(available[recipeA[i]]/recipe[recipeA[i]])
     if(min > amount){
     min = amount;
     }
   }
   console.log(min);
   return(min);

}


//best solutionfunction cakes(recipe, available) {
//   return Object.keys(recipe).reduce(function(val, ingredient) {
//     return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//   }, Infinity)
// }
// 
// second best
// for(var key in recipe){
//   if(recipe.hasOwnProperty(key)){
//     if(key in available){
//       numCakes.push(Math.floor(available[key] / recipe[key]));
//     }else{
//       return 0;
//     }
//   }
// }
//
// return Math.min.apply(null, numCakes);

}
