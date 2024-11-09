// const generateNumbers = (N, newArray) => {

//     /*МОЖНО ЕЕЩЕ ДОБАВИТЬ ПРОВЕРКУ НА ТИПЫ ДАННЫХ(ИЛИ ОБЯЗАТЕЛЬНО?) */

//     if (newArray) {
//         const array = [];
        
//         for (let i = 0; i < N; i++) {
//             array.push(Math.floor(Math.random() * N) + 1);
//         }
//         return array
//     }
//     else {
//         return Math.floor(Math.random() * N) + 1;
//     }
// }

// console.log(generateNumbers(123, true))
// console.log(generateNumbers(6, false))


// const generateNumbers = (N, newArray) => {

//     const maxNumber = N;

//     if (newArray) {
//         const array = [];
        
//         for (let i = 0; i < N; i++) {
//             const randomI = Math.floor(Math.random() * maxNumber);
//             array.push(randomI+ 1);
//         }
//         return array
//     }
//     else {
//         const randomI = Math.floor(Math.random() * maxNumber);
//         return randomI
//     }
// }

// console.log(generateNumbers(111, true))
// console.log(generateNumbers(6, false))