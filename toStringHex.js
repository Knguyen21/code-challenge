'use strict';

function colorOf(r,g,b){
var red = r.toString(16),
    green = g.toString(16),
    blue = b.toString(16)
    red = red.length< 2 ? ("0" + red) : red;
    green = green.length< 2 ? ("0" + green) : green;
    blue = blue.lenth< 2 ? ("0" + blue) : blue;
 console.log("#" + red.toString() + green.toString() + blue.toString());
}


colorOf(13,50,138);


// best practice
// function colorOf(r,g,b){
//  return "#" +
//    (r < 16 ? "0" : "") + r.toString(16) +
//    (g < 16 ? "0" : "") + g.toString(16) +
//    (b < 16 ? "0" : "") + b.toString(16);
//  }


// function colorOf(r,g,b){
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }
//
// var colorOf=(...c)=>"#"+c.map(v=>((v=v.toString(16)).length-1?"":"0")+v).join``
