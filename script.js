// console.log('Я Js')
//
// let message;
// message = ('Я сообщение!')
// console.log(message)

// let admin;
// let name;
//
// name = "John"
//
// admin = name;
//
// alert(admin)

// let name = prompt("Какое ваше имя?", "")
//
// alert(`Ваше имя: ${name}`)
// let value = true;
//
// value = String(value);
//
// alert(typeof value)

// let conv = ("4" / "2");
//
// let num = String(conv)
//
// console.log( typeof num);

// let x = 1;
// let y = 2;
//
// x = -x;
//
// console.log(x, y);

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
//
// alert(+a + +b);

// const persone = {
//   name: `Alex`,
//   tel: `+375295555555`,
//   parents: {
//     mom:`Olga`,
//     dad:`Char`
//   }
// };

// const clone = JSON.parse(JSON.stringify(persone));

// clone.parents.mom = `Anna`;
// console.log(persone);
// console.log(clone);







/*1 ЗАДАЧА 1 ВАРИАНТ*/


const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const countFruits = (arr) =>{
  const result = {};
  
  for (const frut of arr) {
    if (!result[frut]) {
      result[frut] = 1;
    } else {
      result[frut]++;
    }
  }
  
  return result;
}

console.log(countFruits(fruits)); 

/*1 ЗАДАЧА 2 ВАРИАНТ*/

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const countFruits = (arr) => {
  const result = {};
  
  arr.forEach(fruit => {
    result[fruit] = (result[fruit] || 0) + 1;
  });
  
  return result;
}

console.log(countFruits(fruits)); 


/*2 ЗАДАЧА */

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const duplicates = (arr) => {
    const uniqueFruits = [];
    const currentFr = [];

    for (let fruit of arr) {
        if (!currentFr.includes(fruit)) {
            uniqueFruits.push(fruit);
            currentFr.push(fruit);
        }
    }

    return uniqueFruits;
}

console.log(duplicates(fruits));
