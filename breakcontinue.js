

'use strict';

function grabDoll(dolls){
  var bag=[];
  for(var i = 0; i< dolls.length; i++){
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll"){
      if(bag.length >= 3){
        break;
      }
      else{
        bag.push(dolls[i]);
      }
     }
    else{
      continue;
    }
  }
  console.log(bag);
  return bag;
}


grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]);
