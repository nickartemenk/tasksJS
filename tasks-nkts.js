"use strict";

// // ОПЕРАТОРЫ

// console.log('arr' + " - object") // СТРОКА
// console.log(5 + " - object") // СТРОКА
// console.log(5 + +" - object") // NaN ЧИСЛО ПЛЮС СТРОКА
// console.log(1 + +"1") // 2

// let incr = 10;
// let decr = 10;

// // incr++; ПОСТФИКСНАЯ ФОРМА СНАЧАЛА ВОЗВАЩАЕТ ЗНАЧЕНИЕ И ТОЛЬКО ПОСЛЕ ЭТОГО ЕГО УВЕЛИЧИВАЕТ/УМЕНЬШАЕТ
// // decr--;
// // console.log(incr++); --- 10

// // ++incr; ПРЕФЕКСНАЯ ФОРМА ВОЗВРАЩАЕТ УЖЕ ИЗМЕНЕННОЕ ЗНАЧЕНИЕ
// // --decr;
// // console.log(++incr); --- 11

// console.log(incr);
// console.log(decr);

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const aQuestion = prompt('Один из последних просмотренных фильмов?', '')
// const bQuestion = +prompt('На сколько оцените его?', '')
// // const cQuestion = prompt('Один из последних просмотренных фильмов?', '')
// // const dQuestion = +prompt('На сколько оцените его?', '')

// personalMovieDB.movies[aQuestion] = bQuestion;

// console.log(personalMovieDB)

// УСЛОВИЯ

// if (4 === '4') {
//     alert('Верно')
// } else {
//     alert('не верно')
// }

// const num = 50;

// if (num < 49) {
//     console.log('error')
// } else if (num > 100) {
//     console.log('много')
// } else {
//     console.log('верно')
// }

// (num === 50) ? console.log('верно') : console.log('error');

// switch (num) { // SWITCH - СТРОГОЕ СРАВНЕНИЕ
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно')
//     case 50:
//         console.log('В точку')
//     default:
//         console.log('Не в этот раз')
// }

// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// const hamburger = true;
// const fries = true;

// if(hamburger && fries) {
//     console.log('Я сыт');
// }

// console.log((hamburger && fries)) // РЕЗУЛЬТАТ ЛОГИЧЕСКОЕ ЗНАЧЕНИЕ TRUE

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// // console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'fdfdfdf');

// // if(hamburger === 3 && cola === 1 && fries) {
// //     console.log('все сыты');
// // } else {
// //     console.log('мы уходим')
// // }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if(hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('все довольны');
// } else {
//     console.log('мы уходим')
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets)

// // let johnReport,alexReport,samReport,mariaReport = 'done';

// // console.log(johnReport||alexReport||samReport||mariaReport);

// ЦИКЛЫ

// let num = 50;

// while(num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i <= 10; i++) {

//     num++;

//     if(num === 56) {
//         // continue;
//         break;
//     }
//     console.log(num);
// }

// ВЛОЖЕННОСТЬ ЦИКЛОВ

// for (let i = 1; i <= 3; i++) {
//     console.log(i)
//     for (let j = 1; j <= 3; j++) {
//         console.log(j)

//     }
// }

// ЁБАНАЯ ЕЛЬ Я БЫ ДАЖЕ СКАЗАЛ СОСНА(СОСНУЛ)

// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const lenght = 7;

// for(let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++){
//         result += "$";
//     }

//     result += '\n'; // result = result + '\n'
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`first level: ${i}`)
//     for (let j = 0; j < 3; j++) {
//         console.log(`second level: ${j}`)
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`third level: ${k}`)
//         }
//     }
// }

// 1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// function firstTask() {
//     for (let i = 5; i <= 10; i++)
//     console.log(i)
// }

// firstTask()

// 2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i === 13) {
//             break;
//         }
//         console.log(i)
//     }

// }
// secondTask()

// 3.При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function thirdTask() {
//     for (let i = 2; i <= 10; i+=2) {
//         console.log(i)
//     }
// }

// thirdTask()

// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }
// }

// thirdTask()

// 4.Заполните массив цифрами от 5 до 10 включительно.

// function fourthTask() { // МОЕ РЕШЕНИЕ
//     const arrayOfNumbers = [];

//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i);
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fourthTask();

// function fourthTask() { // РЕШЕНИЕ НА САЙТЕ

//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers)
//     return arrayOfNumbers;
// }

// fourthTask()

// СЛОЖНЕЕ ЗАДАЧИ на использование циклов и условий

// 1.Заполните новый массив (result) числами из старого (arr) Должен получиться точно такой же массив Значения массива менять нельзя

// function firstTask() {

//     let arr = [3, 5, 8, 16, 20, 23, 50];
//     let result = [];

//     result = arr

//     return result;
// }

// firstTask()

// function firstTask() {

//     let arr = [3, 5, 8, 16, 20, 23, 50];
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i]
//     }

//     console.log(result)
//     return result;
// }

// firstTask()

// 3.Разверните массив data наоборот при помощи цикла и запишите данные в массив result.

// function thirdTask() {

//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result)
//     return result;
// }

// thirdTask()

// ФУНКЦИИ

// let num = 20;

// function showFirstMessage(text) {

//     console.log(text)
//     let num = 10;
//     console.log(num)
// }

// console.log(num)
// showFirstMessage('hello world')

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3))
// console.log(calc(5, 6))
// console.log(calc(10, 6))

// function ret() {
//     let num = 50;

//     return num;
// }

// const anotherNum = ret();

// console.log(anotherNum);

// const usdCurr = 28;

// function convert (amount, curr) {
//     console.log(curr * amount)
// }

// convert(500, usdCurr);
