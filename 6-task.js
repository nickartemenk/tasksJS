const myStr = "pizza";
let reverseStr = "";

for (let letter of myStr) {
  reverseStr = letter + reverseStr;
}

console.log(reverseStr);
