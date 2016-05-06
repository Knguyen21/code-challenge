'use strict';

function giveMeFive(obj){
var arr = [];
    for(var key in obj){
        if( key.length ===5){
            arr.push(key);
        }
        if (obj[key].length ===5){
          arr.push(obj[key]);
        }

    }
    console.log(arr);
return arr;
}


giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"});
giveMeFive({Pears:"than",apple:"sweet"});
