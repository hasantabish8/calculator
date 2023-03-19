const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
let operand1 = null;
let operator = null;
let result = null;
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    if (value === 'C') {
      clearDisplay();
    } 
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (result !== null) {
        operand1 = result;
        result = null;
      } else {
        operand1 = parseFloat(display.textContent);
      }
      operator = value;
      display.textContent = '';
    } 
    else if (value === '=') {
      handleEquals();
    } 
    else {
      if (result !== null) {
        clearDisplay();
        result = null;
      }
      appendValue(value);
    }
  });
});
function appendValue(value) {
  display.textContent += value;
}

function clearDisplay() {
  display.textContent = '';
  operand1 = null;
  operator = null;
  result = null;
}
function handleEquals() {
  if (!operator) {
    return;
  }
  const operand2 = parseFloat(display.textContent);
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
  }
  display.textContent = result;
  operand1 = null;
  operator = null;
}
