let display = document.getElementById("display");
let expression = "";

function appendNumber(num) {
  expression += num;
  display.value = expression;
}

function appendOperator(op) {
  expression += op;
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = result.toString();  
  } catch {
    display.value = "Error";
    expression = "";
  }
}
