// Task
//
// Coding in function padIt, function accept 2 parameters:
//
// 1.str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
//
// 2.n, it's a number, how many times to pad the string.


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
