'use strict';

let evencount = 0;
let oddcount = 1;
let counter = 0;



function evenarray(integers){
    for(var i = 0; i< integers.length; i++){
        if(integers[i] %2 !== 0){
            return integers[i];
        }
    }
}

function oddarray(integers){
    for(var i = 0; i< integers.length; i++){
        if(integers[i] %2 === 0){
            return integers[i];
        }
    }
}

function findOutlier(integers){
    for (var i = 0; i< integers.length; i++){
        if(integers[i] %2 ===0){
            evencount++;
            if(evencount>= 2){
                for(var i = 0; i< integers.length; i++){
                    if(integers[i] %2 !== 0){
                        return integers[i];
                    }
                }
            }
            else if(evencount > 0){
                oddarray();
            }
        }
        else{
            oddcount++;
            if(evencount>= 2){
                evenarray();
            }
            else if(evencount > 0){
                oddarray();
            }

        }

    }
}

findOutlier([2,6,8,10,3]);
