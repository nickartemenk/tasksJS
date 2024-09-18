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

const persone = {
  name: `Alex`,
  tel: `+375295555555`,
  parents: {
    mom:`Olga`,
    dad:`Char`
  }
};

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = `Anna`;
console.log(persone);
console.log(clone);














