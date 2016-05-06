'use strict';

function longest(arr, n) {
    let counter = 0;
    let longest = arr[0]
    let removed;
        while(counter!==n){
            console.log(counter)
            longest = arr[0];
            for (let i = 1; i<arr.length; i++){
                console.log(longest);
                if (longest.length < arr[i].length){
                    longest = arr[i];
                }
            }
            removed = arr.splice(arr.indexOf(longest), 1);

            counter++;
            console.log(arr);
        }
        console.log(longest);
    }

longest(['Hello','World','Codewars','Katas'],4);
