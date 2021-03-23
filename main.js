//operations for calculator 
function add (num1, num2){
  return num1 + num2;
};
function subtract (num1, num2){
  return num1 - num2;
};
function multiply (num1, num2){
  return num1 * num2;
};
function divide (num1, num2){
  return parseInt(num1) / parseInt(num2);
};
//this function takes an operator and 2 numbers 
//and then calls one of the above functions on the numbers
function operate(operator, num1, num2){
  switch (operator){
      case "+" :
      return add(num1, num2);
      break;
      case "-":
      return subtract(num1, num2);
      break;
      case "*":
      return multiply(num1, num2);
      break;
      case "/":
      return divide(num1, num2);
      break;
  };
};

// let buttons = document.querySelectorAll("#alpha button");

// for(var i =0; i < buttons.length; i++){
//   var btn = buttons[i];
//   btn.addEventListener("click", function() {
//     document.getElementsByClassName("display").value += this.innerHTML;
//   });
// };