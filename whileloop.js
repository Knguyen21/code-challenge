'use strict';

function padIt(str,n){
    let start = 0;
    let string = '';
    while(start <= n){
        string += "*";
        start ++;
        if(start == Math.round(n/2)){
            string += str;
            start ++;
        }
    }

    console.log(string);
}


padIt("a",5);
