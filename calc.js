"use strict";
const input = document.querySelector("#display");
const btnGroup = document.querySelector("#button-group");

const IGNORE_CLASS = "button-group";

let mathOperation = false;
let blockDot = false;

const MATH_SYMBOLS = ["+", "-", "*", "/", "."];
const IGNORE_SYMBOLS = ["+", "-", "*", "/"];

const WHITE_LIST_SYMBOLS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  ".",
  "Backspace",
  "Shift",
  "",
];

const writeToInput = (value) => {
  if (!WHITE_LIST_SYMBOLS.includes(value)) {
    return;
  }

  if (mathOperation && MATH_SYMBOLS.includes(value)) {
    return;
  }

  if (MATH_SYMBOLS.includes(value) && !input.value.trim().length) {
    return;
  }

  mathOperation = MATH_SYMBOLS.includes(value);

  if (blockDot && value === ".") {
    return;
  }

  if (!blockDot && value === ".") {
    blockDot = true;
  }

  if (mathOperation) {
    blockDot = false;
  }

  input.value += value;
};

const equalHandler = () => {
  let value = input.value;

  if (IGNORE_SYMBOLS.includes(value[value.length - 1])) {
    value = value.slice(0, -1);
  }

  input.value = eval(value);
  mathOperation = false;
  blockDot = false;
};

const clearHandler = () => {
  mathOperation = false;
  blockDot = false;
  input.value = "";
};

const deleteHandler = () => {
  const localMathOperation = IGNORE_SYMBOLS.includes(
    input.value[input.value.length - 1]
  );

  if (input.value[input.value.length - 1] === ".") {
    blockDot = false;
  }

  input.value = input.value.slice(0, -1);

  mathOperation = localMathOperation;
};

btnGroup.addEventListener("keypress", (e) => {
  const target = e.target;

  if (target.classList.contains(IGNORE_CLASS)) {
    return;
  }

  switch (target.innerText) {
    case "=":
      equalHandler();
      break;
    case "C":
      clearHandler();
      break;
    case "DEL":
      deleteHandler();
      break;
    default:
      writeToInput(target.innerText);
      break;
  }
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    equalHandler();
    return;
  }
  writeToInput(e.key);
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Backspace") {
    deleteHandler();
  }
});
