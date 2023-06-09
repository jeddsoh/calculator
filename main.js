// Color Theme
const colorTheme = document.getElementById("range");

colorTheme.addEventListener("input", function() {
    if (colorTheme.value == 1) {
        document.documentElement.classList.remove("light", "dark", "acid")
        document.documentElement.classList.add("light")
    } else if (colorTheme.value == 2) {
        document.documentElement.classList.remove("light", "dark", "acid")
        document.documentElement.classList.add("dark")
    } else if (colorTheme.value == 3) {
        document.documentElement.classList.remove("light", "dark", "acid")
        document.documentElement.classList.add("acid")
    }
});

// Calculator Functionality
const displayTotal = document.getElementById("displayTotal");

const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const pointBtn = document.querySelector(".point");
const equalsBtn = document.getElementById("equals");
const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset");

let num1 = "";
let num2 = "";
let operator = "";
let hasPoint = false;

function updateTotal() {
  num1 = num1.slice(0, 10);
  num2 = num2.slice(0, 10);

  displayTotal.textContent = `${num1}` + ` ${operator} ` + `${num2}`;
}

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (!operator) {
      const clickedNumber = button.textContent;
      num1 += clickedNumber;
      updateTotal();
    } else if (operator) {
      const clickedNumber = button.textContent;
      num2 += clickedNumber;
      updateTotal();
    }
  });
});

operatorBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (!num1 && button.textContent == "-") {
      num1 = "-";
      hasPoint = false;
      updateTotal();
    } else if (!num1) {
      const clickedoperator = button.textContent;
      num1 = "0";
      operator += clickedoperator;
      hasPoint = false;
      updateTotal();
    } else if (!operator) {
      const clickedoperator = button.textContent;
      operator += clickedoperator;
      hasPoint = false;
      updateTotal();
    } else if (operator && !num2 && button.textContent == "-") {
      num2 = "-";
      hasPoint = false;
      updateTotal();
    } else if (operator && !num2) {
      const clickedoperator = button.textContent;
      operator = clickedoperator;
      hasPoint = false;
      updateTotal();
    }

    if (num1.toString().endsWith(".")) {
      let num1Array = num1.split("");
      num1Array.pop();
      num1 = num1Array.join("");
      updateTotal();
    }
  });
});

pointBtn.addEventListener("click", () => {
  if (!num1) {
    const clickedPoint = pointBtn.textContent;
    num1 = "0";
    num1 += clickedPoint;
    hasPoint = true;
    updateTotal();
  } else if (operator && !num2) {
    const clickedPoint = pointBtn.textContent;
    num2 = "0";
    num2 += clickedPoint;
    hasPoint = true;
    updateTotal();
  }

  if (!operator && !hasPoint) {
    const clickedPoint = pointBtn.textContent;
    num1 += clickedPoint;
    hasPoint = true;
    updateTotal();
  } else if (operator && !hasPoint) {
    const clickedPoint = pointBtn.textContent;
    num2 += clickedPoint;
    hasPoint = true;
    updateTotal();
  }
});

function reset() {
  num1 = "";
  operator = "";
  num2 = "";
  hasPoint = false;
}

resetBtn.addEventListener("click", () => {
  reset();
  updateTotal();
  displayTotal.textContent = "0";
});

deleteBtn.addEventListener("click", () => {
  if (!operator) {
    let num1Array = num1.split("");
    num1Array.pop();
    num1 = num1Array.join("");

    if (num1.includes(".")) {
      hasPoint = true;
    } else if (!num1.includes(".")) {
      hasPoint = false;
    }
  } else if (operator && num2) {
    let num2Array = num2.split("");
    num2Array.pop();
    num2 = num2Array.join("");

    if (num2.includes(".")) {
      hasPoint = true;
    } else if (!num2.includes(".")) {
      hasPoint = false;
    }
  } else if (operator && !num2) {
    operator = "";
  }

  updateTotal();

  if (!num1) {
    displayTotal.textContent = "0";
  }
});

equalsBtn.addEventListener("click", () => {
  if (num2 && operator == "+") {
    total = add(Number(num1), Number(num2));
    reset();
    num1 = total.toString();
    updateTotal();
  } else if (num2 && operator == "-") {
    total = subtract(Number(num1), Number(num2));
    reset();
    num1 = total.toString();
    updateTotal();
  } else if (num2 && operator == "x") {
    total = multiply(Number(num1), Number(num2));
    reset();
    num1 = total.toString();
    updateTotal();
  } else if (num2 && operator == "/") {
    total = divide(Number(num1), Number(num2));
    reset();
    num1 = total.toString();
    updateTotal();
  }
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}