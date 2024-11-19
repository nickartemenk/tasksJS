// Задача 5. Получить единый массив из любимых пицц каждого друга

// Имеется исходный массив friends:
// Нужно получить результат в следующем формате:

// ['cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish'];

// метод reduce

const friends = [
  { name: "alex", pizzas: ["cheese", "pepperoni"] },
  { name: "mike", pizzas: ["salami", "margarita"] },
  { name: "stas", pizzas: ["meat"] },
  { name: "anna", pizzas: ["fish"] },
];

const allPizzas = friends.reduce((newArrPizzas, friend) => {
  for (let pizza of friend.pizzas) {
    newArrPizzas.push(pizza);
  }
  return newArrPizzas;
}, []);

console.log(allPizzas);
