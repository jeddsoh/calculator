// GET UI ELEMENTS
const equalsBtn = document.getElementById("equals");

const deleteBtn = document.getElementById("delete");
const resetBtn = document.getElementById("reset");

const result = document.getElementById("result");
const numberButtons = document.querySelectorAll(".number");
const operandButtons = document.querySelectorAll(".operand");
const pointBtn = document.querySelector(".point");

let total = "";
let hasPoint = false;
let isTyping = false;
let hasOperand = false;
let hasNum1 = false;
let hasNum2 = false;

let num1 = 0;
let operand = "none";
let num2 = 0;

function updateTotal() {
  result.textContent = total;
}

resetBtn.addEventListener("click", () => {
  total = "0";
  updateTotal();
  hasPoint = false;
  isTyping = false;
  hasNum1 = false;
  hasOperand = false;
  hasNum2 = false;
  total = "";
});

pointBtn.addEventListener("click", () => {
  if (!isTyping) {
    total += "0.";
    updateTotal();
  } else if (!hasPoint && !hasOperand) {
    total += ".";
    updateTotal();
  }

  hasPoint = true;
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const clickedNumber = button.textContent;
    total += clickedNumber;
    isTyping = true;
    updateTotal();
  });
});

deleteBtn.addEventListener("click", () => {
  let totalArray = total.split("");
  totalArray.pop();
  total = totalArray.join("");

  const stillHasPoint = total.includes(".");
  const stillHasOperand =
    total.includes("+") ||
    total.includes("-") ||
    total.includes("x") ||
    total.includes("/");

  if (!stillHasOperand) {
    hasOperand = false;
  }

  if (!stillHasPoint) {
    hasPoint = false;
  }

  updateTotal();

  if (total == "") {
    total = "0";
    updateTotal();
  }
});

operandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isTyping && !hasOperand) {
      const clickedOperand = button.textContent;
      num1 = total;
      hasNum1 = true;
      total += `${clickedOperand}`;
      operand = clickedOperand;
      hasOperand = true;
      updateTotal();
    } else if (!isTyping && !hasOperand) {
      num1 = 0;
      hasNum1 = true;
      const clickedOperand = button.textContent;
      total += `0 ${clickedOperand} `;
      operand = clickedOperand;
      hasOperand = true;
      updateTotal();
    }

    hasPoint = false;
  });
});
