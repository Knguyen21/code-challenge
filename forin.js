// Task
//
// Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.
//
// You need traverse obj, if the key length=5, push this key to an array five(or any other name, you need to define it by yourself, this time I won't help you define variable);if the value length=5, push this value to five.
//
// Return the five after works finished.
//
// You should use for..in in your code,

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
