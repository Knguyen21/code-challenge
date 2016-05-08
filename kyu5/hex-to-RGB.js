// When working with color values in JavaScript it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a hexStringToRGB() function that meets these requirements:
//
// Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
// Returns an object with the structure {r:255, g:153, b:51} where r, g, and b range from 0 through 255
// Note, your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF").
//
// Example
//
// hexStringToRGB("#FF9933") // returns {r:255, g:153, b:51}



'use strict';
function hexStringToRGB(hexString) {
  var obj={};
  var hexArr = []
     var r = hexString.substring(1,3);
     var g = hexString.substring(3,5);
     var b = hexString.substring(5,7);
     hexArr.push(r, g, b)
     var decArr = hexArr.map(function(hex){return parseInt(hex, 16) })
     obj["r"]= decArr[0];
     obj["g"]=decArr[1];
     obj["b"]=decArr[2]
     console.log(obj);
}

hexStringToRGB("#FF9933")

best solution
// function hexStringToRGB(h) {
//   return {
//     r: parseInt(h.slice(1,3), 16),
//     g: parseInt(h.slice(3,5), 16),
//     b: parseInt(h.slice(5,7), 16)
//   };
// }
