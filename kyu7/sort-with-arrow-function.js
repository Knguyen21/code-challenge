// Order People by age Using Arrow Function
//
// Sort and Order people by their age using Arrow Functions
// Task
//
// Your task is to order a list containg people objects by age using the new Javascript Arrow Functions
// Input
//
// Input will be a valid array with People objects containing an Age and Name
// Output
//
// Output will be a valid sorted array with People objects sorted by Age in ascending order
//


var OrderPeople = function(people){
  return people.sort((a,b) => {
    return a.age > b.age ? 1 : a.age < b.age ? -1 : 0;}
  ); //complete this function
}
//
// alternative way
// var OrderPeople = function(people){
//   return people.sort( => (a,b){
//     if(a.age > b.age){
//       return 1;
//     }
//     if(a.age < b.age){
//       return -1;
//     }
//     return 0;
//     }
//   ); //complete this function
// }


//best solution
// var OrderPeople = function(people){
//   return people.sort((a,b) => a.age - b.age );
// }
