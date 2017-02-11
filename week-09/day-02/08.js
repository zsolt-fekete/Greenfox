'use strict';

var students = [
  {name: 'Rezso', age: 9.5, candies: 2},
  {name: 'Gerzson', age: 10, candies: 1},
  {name: 'Aurel', age: 7, candies: 3},
  {name: 'Zsombor', age: 12, candies: 5},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'Teodor', age: 3, candies: 2}
];

// create a function that counts the students that
// has more than 4 candies


function candies_checker(list) {
  var rich = 0;
   list.forEach(function(e) {if (4 < e.candies) {rich += 1;}})
  return rich;};

console.log(candies_checker(students));
