/*1 ЗАДАЧА 1 ВАРИАНТ*/


// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// const countFruits = (arr) =>{
//   const result = {};
  
//   for (const frut of arr) {
//     if (!result[frut]) {
//       result[frut] = 1;
//     } else {
//       result[frut]++;
//     }
//   }
  
//   return result;
// }

// console.log(countFruits(fruits)); 

/*1 ЗАДАЧА 2 ВАРИАНТ*/

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

// const countFruits = (arr) => {
//   const result = {};
  
//   arr.forEach(fruit => {
//     result[fruit] = (result[fruit] || 0) + 1;
//   });
  
//   return result;
// }

// console.log(countFruits(fruits));