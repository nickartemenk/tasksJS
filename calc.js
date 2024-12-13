const display = document.getElementById("display");
const buttonGroup = document.getElementById("button-group");

buttonGroup.addEventListener("click", function (event) {
  const target = event.target;

  if (target.id === "clear") {
    display.value = "";
  } else if (target.id === "backspace") {
    display.value = display.value.slice(0, -1);
  } else if (target.tagName === "BUTTON") {
    const buttonText = target.textContent;

    if (buttonText === "=") {
      try {
        const result = new Function(
          "return (" + display.value.replace(/\s+/g, "") + ")"
        )();
        display.value = result !== undefined ? result : "Ошибка";
      } catch (e) {
        display.value = "Ошибка";
      }
    } else {
      display.value += buttonText;
    }
  }
});
