// Task
//
// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.
//
// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
//
// the color code should starting with "#". and then use 2 characters per color.
//
// for example:
//
//   colorOf(255,0,0) should return "#ff0000"
//   colorOf(0,111,0) should return "#006f00"
//   colorOf(1, 2 ,3) should return "#010203"



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
