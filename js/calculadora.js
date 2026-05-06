const state = {
  currentValue: 0,
  beforeValue: null,
  operator: null,
  waitingSec: false,
};

const display = document.querySelector(".result");

function output(a) {
  display.innerText = a;
}

function clickNumber(num) {
  if (state.waitingSec) {
    state.currentValue = num;
    state.waitingSec = false;
  } else {
    state.currentValue =
      state.currentValue === 0 ? num : state.currentValue + num;
  }

  output(state.currentValue);
}

function clickOperator(op) {
  state.beforeValue = state.currentValue;
  state.operator = op;
  state.waitingSec = true;

  return state.operator;
}

function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);

  if (operator == "+") return a + b;
  if (operator == "-") return a - b;
  if (operator == "*") return a * b;
  if (operator == "/") return b !== 0 ? a / b : "Erro";
}

function displayClear() {
  state.currentValue = 0;
  state.beforeValue = null;
  state.operator = null;
  state.waitingSec = false;

  display.innerText = state.currentValue;
}

const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked.classList.contains("btn-number")) {
    clickNumber(clicked.innerText);
  }
  if (clicked.classList.contains("operator")) {
    state.operator = clicked.innerText;
    clickOperator(state.operator);
    output(state.operator);
  }

  if (clicked.classList.contains("btn-clear")) {
    displayClear();
  }

  if (clicked.classList.contains("btn-equal")) {
    const result = calculate(
      state.beforeValue,
      state.currentValue,
      state.operator,
    );
    state.currentValue = result;
    output(result);
  }
});

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || key === ".") {
    clickNumber(key);
  }

  if (["+", "-", "*", "/"].includes(key)) {
    state.operator = key;
    clickOperator(state.operator);
    output(state.operator);
  }

  if (key === "=" || key === "Enter") {
    const result = calculate(
      state.beforeValue,
      state.currentValue,
      state.operator,
    );
    state.currentValue = result;
    output(result);
  }

  if (key === "Escape" || key === "Delete") {
    displayClear();
  }

  if (key === "Backspace") {
    state.currentValue = String(state.currentValue).slice(0, -1);
    output(state.currentValue);
  }
});
