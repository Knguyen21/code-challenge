

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function(a,b){ return a < b? a :b});
  }
}


// //best solution
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }
