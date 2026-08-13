function clearInput() {
  document.getElementById("display").value = "0";
}

function addNumber(number) {
  let display = document.getElementById("display");
  if (display.value === "0" && number !== ".") {
    display.value = number;
  } else {
    display.value += number;
  }
}

function addOperator(operator) {
  document.getElementById("display").value += operator;
}

function nemehhasah() {
  let display = document.getElementById("display");
  if (display.value !== "" && display.value !== "0") {
    display.value = display.value * -1;
  }
}

function calculate() {
  let display = document.getElementById("display");
  try {
    let expression = display.value.replace(/×/g, "*").replace(/÷/g, "/");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
