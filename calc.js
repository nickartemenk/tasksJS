const display = document.getElementById("display");
const buttonGroup = document.getElementById("button-group");

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ("0123456789+-*/.".includes(key)) {
    const currentValue = display.value;

    if (key === "." && (currentValue.endsWith(".") || currentValue === "")) {
      return;
    }

    if (["+", "-", "*", "/"].includes(key)) {
      if (
        currentValue === "" ||
        ["+", "-", "*", "/"].includes(currentValue.slice(-1))
      ) {
        return;
      }
    }

    display.value += key;
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "=" || key === "Enter") {
    calculateResult();
  } else if (key === "Escape") {
    display.value = "";
  } else {
    event.preventDefault();
  }
});

const calculateResult = () => {
  let currentValue = display.value;

  if (["+", "-", "*", "/"].includes(currentValue.slice(-1))) {
    currentValue = currentValue.slice(0, -1);
  }

  try {
    const result = eval(currentValue.replace(/\s+/g, ""));
    display.value = isNaN(result) ? "Ошибка" : result.toString();
  } catch (e) {
    display.value = "Ошибка";
  }
};

buttonGroup.addEventListener("click", (event) => {
  const target = event.target;

  if (target.id === "clear") {
    display.value = "";
  } else if (target.id === "backspace") {
    display.value = display.value.slice(0, -1);
  } else if (target.tagName === "BUTTON") {
    const buttonText = target.textContent;

    if (buttonText === "=") {
      calculateResult();
    } else {
      display.value += buttonText;
    }
  }
});
